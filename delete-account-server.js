import express from 'express';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
let supabase = null;
let deleteEnabled = false;

if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: {
      persistSession: false
    }
  });
  deleteEnabled = true;
} else {
  console.warn('SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY not set. The delete-account endpoint will be disabled.');
}

app.use(express.static(process.cwd()));

app.post('/delete-account', async (req, res) => {
  if (!deleteEnabled) {
    return res.status(503).json({ error: 'Service non configuré. Ajoutez SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY.' });
  }
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '').trim();
  const { user_id } = req.body || {};

  if (!token || !user_id) {
    return res.status(400).json({ error: 'Token et user_id requis.' });
  }

  try {
    const { data: userData, error: userError } = await supabase.auth.getUser(token);
    if (userError || !userData?.user) {
      return res.status(401).json({ error: userError?.message || 'Token invalide.' });
    }

    const user = userData.user;
    if (user.id !== user_id) {
      return res.status(403).json({ error: 'Accès refusé.' });
    }

    // Supprime les données associées
    await supabase.from('contacts').delete().eq('user_id', user.id);
    await supabase.from('orders').delete().eq('user_id', user.id);
    await supabase.from('profiles').delete().eq('id', user.id);

    const { error: deleteError } = await supabase.auth.admin.deleteUser(user.id);
    if (deleteError) {
      return res.status(500).json({ error: deleteError.message });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur serveur.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Delete-account server listening on http://localhost:${port}`);
});

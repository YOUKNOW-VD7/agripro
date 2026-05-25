const recettesData = {
        'Thiéboudienne': {
            ingredients: [
                '4 parts de poisson (mérou ou capitaine)',
                '500g de riz étuvé',
                '4 tomates fraîches',
                '2 oignons',
                '2 carottes',
                '1 chou',
                '1 aubergine',
                '2 piments',
                'Huile rouge (ou huile d\'arachide)',
                'Sel, poivre, persil'
            ],
            preparation: [
                'Nettoyer et couper le poisson en morceaux. Le faire mariner avec du sel, du poivre et du persil.',
                'Mixer les tomates et oignons pour obtenir une pâte.',
                'Dans une grande marmite, faire chauffer l\'huile et y faire revenir la pâte tomate-oignon.',
                'Ajouter le poisson et faire dorer des deux côtés.',
                'Ajouter 1,5L d\'eau, les légumes coupés et le piment.',
                'Laisser mijoter 20 minutes, puis retirer le poisson et les légumes.',
                'Ajouter le riz dans le bouillon et cuire à feu doux pendant 20 minutes.',
                'Remettre le poisson et les légumes sur le riz. Laisser reposer 5 minutes.',
                'Servir chaud dans un plat traditionnel.'
            ],
            temps: '45 minutes',
            personnes: '4 personnes'
        },
        'Yassa au Poulet': {
            ingredients: [
                '1 poulet fermier (découpé en morceaux)',
                '6 gros oignons',
                '4 citrons verts',
                '4 cuillères à soupe de moutarde',
                '2 piments',
                'Huile d\'olive',
                'Sel, poivre, laurier'
            ],
            preparation: [
                'Préparer la marinade : jus de citron, moutarde, oignons émincés, sel, poivre, laurier.',
                'Y faire mariner le poulet au réfrigérateur pendant 4h minimum (idéalement toute une nuit).',
                'Retirer le poulet de la marinade et le faire dorer à la poêle.',
                'Dans la même poêle, faire revenir les oignons de la marinade jusqu\'à caramélisation.',
                'Ajouter le poulet, la marinade restante et 500ml d\'eau.',
                'Laisser mijoter à feu doux pendant 45 minutes.',
                'Servir avec du riz blanc bien chaud.'
            ],
            temps: '1 heure + marinade',
            personnes: '6 personnes'
        },
        'Mafé': {
            ingredients: [
                '1kg de bœuf (gîte ou paleron)',
                '500g de pâte d\'arachide',
                '4 tomates',
                '3 oignons',
                '2 carottes',
                '2 pommes de terre',
                '1 patate douce',
                '2 cubes d\'assaisonnement',
                'Sel, poivre'
            ],
            preparation: [
                'Couper la viande en morceaux. La faire revenir dans une marmite jusqu\'à coloration.',
                'Ajouter les oignons émincés et les tomates mixées. Laisser mijoter 10 minutes.',
                'Ajouter 2L d\'eau et les cubes d\'assaisonnement. Laisser cuire 30 minutes.',
                'Délayer la pâte d\'arachide dans un peu d\'eau tiède, puis l\'ajouter à la marmite.',
                'Ajouter les légumes coupés en morceaux.',
                'Laisser mijoter à feu doux pendant 45 minutes, en remuant régulièrement.',
                'Servir avec du riz blanc ou du « fonio ».'
            ],
            temps: '50 minutes',
            personnes: '4 personnes'
        },
        'Sombi': {
            ingredients: [
                '250g de riz rond',
                '1L de lait de coco',
                '500ml de lait de vache',
                '150g de sucre',
                '1 bâton de cannelle',
                '1 gousse de vanille',
                'Noix de coco râpée (pour la décoration)'
            ],
            preparation: [
                'Rincer le riz à l\'eau froide.',
                'Dans une casserole, mélanger les deux laits, le sucre, la cannelle et la vanille.',
                'Porter à ébullition, puis ajouter le riz.',
                'Baisser le feu et laisser mijoter pendant 25-30 minutes, en remuant régulièrement.',
                'Le riz doit être crémeux et fondant.',
                'Retirer la cannelle et la vanille.',
                'Servir chaud ou froid, garni de noix de coco râpée.'
            ],
            temps: '30 minutes',
            personnes: '4 personnes'
        },
        'Firire': {
            ingredients: [
                '4 poissons entiers (daurade, tilapia ou mulet)',
                '500g d\'oignons émincés',
                '3 gousses d\'ail',
                '1 morceau de gingembre frais',
                '2 cuillères à soupe de moutarde',
                '1 piment antillais (facultatif)',
                'Huile de friture',
                'Sel, poivre et vinaigre',
                'Accompagnement : Alloco (bananes plantains frites) ou frites de pomme de terre'
            ],
            preparation: [
                'Nettoyer le poisson, faire des incisions latérales et le mariner avec de l\'ail pilé, du sel, du poivre et un peu de vinaigre.',
                'Faire chauffer l\'huile et frire les poissons jusqu\'à ce qu\'ils soient bien dorés et croustillants.',
                'Pendant ce temps, préparer la sauce : faire revenir les oignons émincés dans un peu d\'huile.',
                'Ajouter la moutarde, le reste de l\'ail pilé, le gingembre, le sel et le poivre.',
                'Laisser mijoter à feu doux jusqu\'à ce que les oignons soient tendres et translucides.',
                'Ajouter un filet de vinaigre et le piment entier pour parfumer la sauce sans piquer.',
                'Servir le poisson frit nappé de sa sauce aux oignons, accompagné de plantains frites ou de frites.'
            ],
            temps: '45 minutes',
            personnes: '4 personnes'
        },
        'BrochettesDeViande': {
            ingredients: [
                '800g de viande de bœuf (ou filets de poulet) coupée en dés',
                '1 poivron vert, 1 poivron jaune, 1 poivron rouge',
                '2 gros oignons',
                '3 cuillères à soupe d\'huile',
                '2 gousses d\'ail pilées',
                '1 cuillère à café de paprika et de gingembre',
                'Sel, poivre et moutarde',
                'Pics à brochettes (en bois ou métal)'
            ],
            preparation: [
                'Dans un bol, préparer la marinade : mélangez l\'huile, la moutarde, l\'ail, le paprika, le gingembre, le sel et le poivre.',
                'Ajouter la viande à la marinade et laisser reposer au moins 30 minutes au frais.',
                'Laver et couper les poivrons (vert, jaune, rouge) et les oignons en carrés de la taille des morceaux de viande.',
                'Monter les brochettes en alternant : une pièce de viande, un morceau de poivron rouge, un oignon, un morceau de viande, un poivron jaune, etc.',
                'Faire griller les brochettes au barbecue, à la plancha ou au four pendant 10 à 15 minutes.',
                'Retourner régulièrement et badigeonner avec le reste de marinade durant la cuisson.',
                'Servir bien chaud avec du riz, des frites ou du pain de campagne.'
            ],
            temps: '40 minutes',
            personnes: '4 personnes'
        }
    };
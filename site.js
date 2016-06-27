// create an array with nodes
    var nodes = new vis.DataSet([
        {id: 0, label: 'Adam SMITH'},
            {id: 1, label: 'Philosophie morale'},
                {id: 11, label: 'La sympathie'},
                    {id: 111, label: 'Le transport de l\'imagination'},
                    {id: 112, label: 'Le principe d\'atténuation'},
                        {id: 1121, label: 'Les deux vertus'},
                            {id: 11211, label: 'Amabilité'},
                            {id: 11212, label: 'Empire sur soie'},
                        {id:1122, label: 'L\'auto-régulation des passions'},
                {id: 12, label: 'Les règles morales'},
                    {id: 121, label: 'La convenance'},
                    {id: 122, label: 'L\'approbation ou le jugement moral'},
                    {id: 123, label: 'La double évaluation'},
                        {id: 1231, label: 'Motif et conséquence'},
                        {id: 1232, label: 'Absolu et relatif'},
                    {id: 124, label: 'Le Spectateur Impartial'},
                        {id: 1241, label: 'Genèse du SI'},
                        {id: 1242, label: 'Les contradictions de la symapthie'},
                            {id: 12421, label: 'Le défaut : règles morales'},
                            {id: 12422, label: 'L\'excès : la vanité, l\'amour des puissants'},

            {id: 2, label: 'Economie'},
                {id: 21, label: 'L\'échange'},
                    {id: 211, label: 'Fondement de l\'échange'},
                    {id: 212, label: 'Penchant et besoin'},
                    {id: 213, label: 'Bienveillance et intérêt'},
                    {id: 214, label: 'L\'amélioration de son sort'},
                {id: 22, label: 'L\'auto-régulation des échanges'},
                    {id: 221, label: 'Critique de la physiocratie'},
                    {id: 222, label: 'Critique du mercantilisme'},
                    {id: 223, label: 'Le système de la liberté naturelle'},
                    {id: 224, label: 'La frugalité'},
                {id: 23, label: 'La division du travail'},
                    {id: 231, label: 'La valeur des marchandises'},
                    {id: 232, label: 'La division sociale et l\'égalité'},

            {id: 3, label: 'Philosophie Politique'},
                {id: 31, label: 'Sympathie et société'},
                    {id: 311, label: 'La sociabilité'},
                    {id: 312, label: 'Les limites de la sympathie'},
                    {id: 313, label: 'La critique de l\'état de nature et du contrat'},
                    {id: 314, label: 'Le principe de proximité'},
                {id: 32, label: 'L\'Etat'},
                    {id: 321, label: 'Justice et vengeance'},
                    {id: 322, label: 'Les règles de justice'},
                    {id: 323, label: 'Critiques de l\'Etat'},
                    {id: 324, label: 'Fonction négative de l\'Etat'},
                {id: 33, label: 'La main invisible'},

            {id: 4, label: 'Les écrits épistémologiques et esthétiques'},
                {id: 41, label: 'Histoire de l\'astronomie'},
                    {id: 411, label: 'La surprise, l\'étonnement'},
                    {id: 412, label: 'Les liaisons imaginatives'},
                    {id: 413, label: 'La main invisible dans le champ scientifique'},
                {id: 42, label: 'Esthétique'},
                    {id: 421, label: 'L\'imitation'},
                    {id: 422, label: 'La musique'},
                    {id: 423, label: 'L\'origine du langage'}
    ]);

    // create an array with edges
    var edges = new vis.DataSet([
        {from: 0,    to: 1},
        {from: 0,    to: 2},
        {from: 0,    to: 3},
        {from: 0,    to: 4},

            {from: 1,    to: 11},
            {from: 1,    to: 12},
            {from: 2,    to: 21},
            {from: 2,    to: 22},
            {from: 2,    to: 23},
            {from: 3,    to: 31},
            {from: 3,    to: 32},
            {from: 3,    to: 33},
            {from: 4,    to: 41},
            {from: 4,    to: 42},
            
                {from: 11,   to: 111},
                {from: 11,   to: 112},

                {from: 12,   to: 121},
                {from: 12,   to: 122},
                {from: 12,   to: 123},
                {from: 12,   to: 124},

                {from: 21,   to: 211},
                {from: 21,   to: 212},
                {from: 21,   to: 213},
                {from: 21,   to: 214},

                {from: 22,   to: 221},
                {from: 22,   to: 222},
                {from: 22,   to: 223},
                {from: 22,   to: 224},

                {from: 23,   to: 231},
                {from: 23,   to: 232},

                {from: 31,   to: 311},
                {from: 31,   to: 312},
                {from: 31,   to: 313},
                {from: 31,   to: 314},

                {from: 32,   to: 321},
                {from: 32,   to: 322},
                {from: 32,   to: 323},
                {from: 32,   to: 324},

                {from: 41,   to: 411},
                {from: 41,   to: 412},
                {from: 41,   to: 413},

                {from: 42,   to: 421},
                {from: 42,   to: 422},
                {from: 42,   to: 423},

                    {from: 112,  to: 1121},
                    {from: 112,  to: 1122},

                    {from: 123,  to: 1231},
                    {from: 123,  to: 1232},

                    {from: 124,  to: 1241},
                    {from: 124,  to: 1242},

                        {from: 1121, to: 11211},
                        {from: 1121, to: 11212},
            
                            {from: 1242, to: 12421},
                            {from: 1242, to: 12422},
    ]);

    // create a network
    var container = document.getElementById('mynetwork');

    // provide the data in the vis format
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    // initialize your network!
    var network = new vis.Network(container, data, options);
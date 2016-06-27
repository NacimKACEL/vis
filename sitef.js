// create an array with nodes
    //var color = 'gray';
    //var len = undefined;

    var nodes = new vis.DataSet([
        {id: 0, shape: 'circularImage', image: 'adam.png', label:'Adam SMITH', group: 0, title:'Je suis ton pére !!', size : 40},
            {id: 1, label: 'Philosophie morale', group: 18, title: 'Philosophie morale', size : 30},
                {id: 11, label: 'La sympathie', group: 5, title: 'La sympathie'},
                    {id: 111, label: 'Le transport de  l\'imagination', group: 5, title :'Le transport de  l\'imagination'},
                    {id: 112, label: 'Le principe d\'atténuation', group: 6, title: 'Le principe d\'atténuation'},
                        {id: 1121, label: 'Les deux vertus', group: 7, title: 'Les deux vertus'},
                            {id: 11211, label: 'Amabilité', group: 7, title: 'Amabilité'},
                            {id: 11212, label: 'Empire sur soie',group: 7, title: 'Empire sur soie'},
                        {id:1122, label: 'L\'auto-régulation des passions',group: 6, title: 'L\'auto-régulation des passions'},
                {id: 12, label: 'Les règles morales', group: 1, title: 'Les règles morales'},
                    {id: 121, label: 'La convenance', group:1, title: 'La convenance'},
                    {id: 122, label: 'L\'approbation ou le jugement moral', group:1, title: 'L\'approbation ou le jugement moral'},
                    {id: 123, label: 'La double évaluation', group: 8, title: 'La double évaluation'},
                        {id: 1231, label: 'Motif et conséquence', group: 8, title: 'La double évaluation'},
                        {id: 1232, label: 'Absolu et relatif', group: 8, title: 'Absolu et relatif'},
                    {id: 124, label: 'Le Spectateur Impartial', group: 17, title: 'Le Spectateur Impartial'},
                        {id: 1241, label: 'Genèse du SI', group: 17, title: 'Genèse du SI'},
                        {id: 1242, label: 'Les contradictions de la symapthie', group: 15, title: 'Les contradictions de la symapthie'},
                            {id: 12421, label: 'Le défaut: règles morales', group: 15, title: 'Le défaut: règles morales'},
                            {id: 12422, label: 'L\'excès: la vanité, l\'amour des puissants', group: 15, title: 'L\'excès: la vanité, l\'amour des puissants'},

            {id: 2, label: 'Economie', group: 2, title: 'Economie', size : 30},
                {id: 21, label: 'L\'échange', group: 9, title: 'L\'échange'},
                    {id: 211, label: 'Fondement  de l\'échange', group: 9, title: 'Fondement  de l\'échange'},
                    {id: 212, label: 'Penchant  et   besoin', group: 9, title: 'Penchant  et   besoin'},
                    {id: 213, label: 'Bienveillance  et  intérêt', group: 9, title: 'Bienveillance  et  intérêt'},
                    {id: 214, label: 'L\'amélioration  de  son sort', group: 9, title: 'L\'amélioration  de  son sort'},
                {id: 22, label: 'L\'auto régulation des échanges', group: 10, title: 'L\'auto régulation des échanges'},
                    {id: 221, label: 'Critique de  la physiocratie', group: 10, title: 'Critique de  la physiocratie'},
                    {id: 222, label: 'Critique  du  mercantilisme', group: 10, title: 'Critique  du  mercantilisme'},
                    {id: 223, label: 'Le système de la liberté naturelle', group: 10, title: 'Le système de la liberté naturelle'},
                    {id: 224, label: 'La frugalité', group: 10, title: 'La frugalité'},
                {id: 23, label: 'La division  du  travail', group:11, title: 'La division  du  travail'},
                    {id: 231, label: 'La valeur des marchandises', group: 11, title: 'La valeur des marchandises'},
                    {id: 232, label: 'la division  sociale  et l\'égalité', group: 11, title: 'la division  sociale  et l\'égalité'},

            {id: 3, label: 'Philosophie  Politique',  group: 3, size : 30, title: 'Philosophie  Politique'},
                {id: 31, label: 'sympathie  et  société', group: 13, title: 'sympathie  et  société'},
                    {id: 311, label: 'La sociabilité', group: 13, title: 'La sociabilité'},
                    {id: 312, label: 'Les limites  de la  sympathie', group: 13, title: 'Les limites  de la  sympathie'},
                    {id: 313, label: 'La critique de l\'état de nature  et du contrat', group: 13, title: 'La critique de l\'état de nature  et du contrat'},
                    {id: 314, label: 'Le principe  de proximité', group: 13, title: 'Le principe  de proximité'},
                {id: 32, label: 'L\'Etat',  group: 14, title: 'L\'Etat'},
                    {id: 321, label: 'Justice  et  vengeance', group: 14, title: 'Justice  et  vengeance'},
                    {id: 322, label: 'Les règles  de  justice', group: 14, title: 'Les règles  de  justice'},
                    {id: 323, label: 'Critiques  de  l\'Etat', group: 14, title: 'Critiques  de  l\'Etat'},
                    {id: 324, label: 'Fonction  négative  de l\'Etat', group: 14, title: 'Fonction  négative  de l\'Etat'},
                {id: 33, label: 'La main  invisible', group: 3, title: 'La main  invisible'},

            {id: 4, label: 'Les écrits  épistémologiques  et esthétiques', group: 4, size : 30, title: 'Les écrits  épistémologiques  et esthétiques'},
                {id: 41, label: 'histoire  de l\'astronomie', group: 16, title: 'histoire  de l\'astronomie'},
                    {id: 411, label: 'La surprise,  l\'étonnement', group: 16, title: 'La surprise,  l\'étonnement'},
                    {id: 412, label: 'Les liaisons  imaginatives', group: 16, title: 'Les liaisons  imaginatives'},
                    {id: 413, label: 'La main  invisible dans le champ  scientifique', group: 16, title: 'La main  invisible dans le champ  scientifique'},
                {id: 42, label: 'Esthétique', group: 12, title: 'Esthétique'},
                    {id: 421, label: 'L\'imitation', group: 12, title: 'L\'imitation'},
                    {id: 422, label: 'La musique', group: 12, title: 'La musique'},
                    {id: 423, label: 'L\'origine du langage', group: 12, title: 'L\'origine du langage'}
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
    
    var options = {
        nodes: {
            //shape: 'box',
            shape : 'text', 
            //shape : 'square', 
            //shape : 'text',
            //shape : 'star',
            size: 20,
            font: {
                size: 16,
                color: '#000000'
            },
            borderWidth: 2
        },
        edges: {
            width: 4
        },
        interaction: {
          navigationButtons: true,
          keyboard: true,
          hover: true
        }
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

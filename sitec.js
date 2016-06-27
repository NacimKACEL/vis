// create an array with nodes
    //var color = 'gray';
    //var len = undefined;

    var nodes = new vis.DataSet([
        {id: 0, shape: 'circularImage', image: 'adam.png', label:'Adam SMITH', size: 120, group: 0},
            {id: 1, label: 'Philosophie morale',size: 80, group: 20},
                {id: 11, label: 'La sympathie', size:45, group: 5},
                    {id: 111, label: 'Le transport de  l\'imagination', group: 5},
                    {id: 112, label: 'Le principe d\'atténuation', group: 6},
                        {id: 1121, label: 'Les deux vertus', group: 18},
                            {id: 11211, label: 'Amabilité', group: 18},
                            {id: 11212, label: 'Empire sur soie',group: 18},
                        {id:1122, label: 'L\'auto-régulation des passions',group: 6},
                {id: 12, label: 'Les règles morales',size:45, group: 1},
                    {id: 121, label: 'La convenance', group:1},
                    {id: 122, label: 'L\'approbation ou le jugement moral', group:1},
                    {id: 123, label: 'La double évaluation', group: 17},
                        {id: 1231, label: 'Motif et conséquence', group: 17},
                        {id: 1232, label: 'Absolu et relatif', group: 17},
                    {id: 124, label: 'Le Spectateur Impartial',size:45, group: 18},
                        {id: 1241, label: 'Genèse du SI', group: 18},
                        {id: 1242, label: 'Les contradictions de la symapthie', group: 15},
                            {id: 12421, label: 'Le défaut: règles morales', group: 15},
                            {id: 12422, label: 'L\'excès: la vanité, l\'amour des puissants', group: 15},

            {id: 2, label: 'Economie',size: 80, group: 2},
                {id: 21, label: 'L\'échange',size:45, group: 9},
                    {id: 211, label: 'Fondement  de l\'échange', group: 9},
                    {id: 212, label: 'Penchant  et   besoin', group: 9},
                    {id: 213, label: 'Bienveillance  et  intérêt', group: 9},
                    {id: 214, label: 'L\'amélioration  de  son sort', group: 9},
                {id: 22, label: 'L\'auto régulation des échanges',size: 45, group: 10},
                    {id: 221, label: 'Critique de  la physiocratie', group: 10},
                    {id: 222, label: 'Critique  du  mercantilisme', group: 10},
                    {id: 223, label: 'Le système de la liberté naturelle', group: 10},
                    {id: 224, label: 'La frugalité', group: 10},
                {id: 23, label: 'La division  du  travail',size: 45, group:11},
                    {id: 231, label: 'La valeur des marchandises', group: 11},
                    {id: 232, label: 'la division  sociale  et l\'égalité', group: 11},

            {id: 3, label: 'Philosophie  Politique',size: 80,  group: 3},
                {id: 31, label: 'sympathie  et  société', group: 13},
                    {id: 311, label: 'La sociabilité', group: 13},
                    {id: 312, label: 'Les limites  de la  sympathie', group: 13},
                    {id: 313, label: 'La critique de l\'état de nature  et du contrat', group: 13},
                    {id: 314, label: 'Le principe  de proximité', group: 13},
                {id: 32, label: 'L\'Etat', size: 60,  group: 14},
                    {id: 321, label: 'Justice  et  vengeance', group: 14},
                    {id: 322, label: 'Les règles  de  justice', group: 14},
                    {id: 323, label: 'Critiques  de  l\'Etat', group: 14},
                    {id: 324, label: 'Fonction  négative  de l\'Etat', group: 14},
                {id: 33, label: 'La main  invisible', group: 3},

            {id: 4, label: 'Les écrits  épistémologiques  et esthétiques',size: 80, group: 4},
                {id: 41, label: 'histoire  de l\'astronomie',size:45, group: 16},
                    {id: 411, label: 'La surprise,  l\'étonnement', group: 16},
                    {id: 412, label: 'Les liaisons  imaginatives', group: 16},
                    {id: 413, label: 'La main  invisible dans le champ  scientifique', group: 16},
                {id: 42, label: 'Esthétique', size:45, group: 12},
                    {id: 421, label: 'L\'imitation', group: 12},
                    {id: 422, label: 'La musique', group: 12},
                    {id: 423, label: 'L\'origine du langage', group: 12}
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
            shape : 'dot', 
            //shape : 'square', 
            //shape : 'text',
            //shape : 'star',
            size: 30,
            font: {
                size: 26,
                color: '#000000'
            },
            borderWidth: 2
        },
        edges: {
            width: 4
        },
        interaction: {hover: true}
    };

    // initialize your network!
    var network = new vis.Network(container, data, options);

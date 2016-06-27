// create an array with nodes
    //var color = 'gray';
    //var len = undefined;

    var nodes = new vis.DataSet([
        {id: 0, shape: 'circularImage', image: 'adam.png', label:'Adam SMITH', size: 60, group: 0},
            {id: 1, label: 'Philosophie\nmorale',size: 40, group: 20},
                {id: 11, label: 'La sympathie', group: 5},
                    {id: 111, label: 'Le transport\nde\n l\'imagination', group: 6},
                    {id: 112, label: 'Le principe\nd\'atténuation', group: 6},
                        {id: 1121, label: 'Les deux\nvertus', group: 5},
                            {id: 11211, label: 'Amabilité', group: 5},
                            {id: 11212, label: 'Empire\nsur soie',group: 5},
                        {id:1122, label: 'L\'auto-régulation\ndes passions',group: 5},
                {id: 12, label: 'Les règles\nmorales', group: 1},
                    {id: 121, label: 'La convenance', group:1},
                    {id: 122, label: 'L\'approbation\nou le\njugement\nmoral', group:1},
                    {id: 123, label: 'La double\névaluation', group: 17},
                        {id: 1231, label: 'Motif et\nconséquence', group: 17},
                        {id: 1232, label: 'Absolu\net\nrelatif', group: 17},
                    {id: 124, label: 'Le\nSpectateur\nImpartial',size:45, group: 18},
                        {id: 1241, label: 'Genèse du SI', group: 18},
                        {id: 1242, label: 'Les\ncontradictions\nde la\nsymapthie', group: 15},
                            {id: 12421, label: 'Le défaut:\nrègles\nmorales', group: 15},
                            {id: 12422, label: 'L\'excès:\nla vanité,\nl\'amour\ndes\npuissants', group: 15},

            {id: 2, label: 'Economie',size: 40, group: 2},
                {id: 21, label: 'L\'échange', group: 9},
                    {id: 211, label: 'Fondement \nde l\'échange', group: 9},
                    {id: 212, label: 'Penchant\n et \n besoin', group: 9},
                    {id: 213, label: 'Bienveillance\n et \nintérêt', group: 9},
                    {id: 214, label: 'L\'amélioration\n de\n son sort', group: 9},
                {id: 22, label: 'L\'auto\nrégulation\ndes\néchanges', group: 10},
                    {id: 221, label: 'Critique de\n la physiocratie', group: 10},
                    {id: 222, label: 'Critique \ndu\n mercantilisme', group: 10},
                    {id: 223, label: 'Le système\nde la liberté\nnaturelle', group: 10},
                    {id: 224, label: 'La frugalité', group: 10},
                {id: 23, label: 'La division\n du\n travail', group:11},
                    {id: 231, label: 'La\nvaleur des\nmarchandises', group: 11},
                    {id: 232, label: 'la division\n sociale\n et l\'égalité', group: 11},

            {id: 3, label: 'Philosophie\n Politique',size: 40,  group: 3},
                {id: 31, label: 'sympathie\n et\n société', group: 13},
                    {id: 311, label: 'La sociabilité', group: 13},
                    {id: 312, label: 'Les limites\n de la\n sympathie', group: 13},
                    {id: 313, label: 'La critique\nde l\'état\nde nature\n et du contrat', group: 13},
                    {id: 314, label: 'Le principe\n de proximité', group: 13},
                {id: 32, label: 'L\'Etat', size: 60,  group: 14},
                    {id: 321, label: 'Justice \net\n vengeance', group: 14},
                    {id: 322, label: 'Les règles\n de \njustice', group: 14},
                    {id: 323, label: 'Critiques\n de \nl\'Etat', group: 14},
                    {id: 324, label: 'Fonction \nnégative\n de l\'Etat', group: 14},
                {id: 33, label: 'La main\n invisible', group: 3},

            {id: 4, label: 'Les écrits\n épistémologiques\n et esthétiques',size: 40, group: 4},
                {id: 41, label: 'histoire \nde l\'astronomie', group: 16},
                    {id: 411, label: 'La surprise,\n l\'étonnement', group: 16},
                    {id: 412, label: 'Les liaisons\n imaginatives', group: 16},
                    {id: 413, label: 'La main \ninvisible\ndans le champ\n scientifique', group: 16},
                {id: 42, label: 'Esthétique', group: 12},
                    {id: 421, label: 'L\'imitation', group: 12},
                    {id: 422, label: 'La musique', group: 12},
                    {id: 423, label: 'L\'origine \ndu langage', group: 12}
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
            shape : 'circle', 
            size: 20,
            font: {
                size: 13,
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

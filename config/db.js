const mongoose = require('mongoose');

mongoose
    .connect(
        'mongodb+srv://elyas:Elfddfds1998c@cluster0.emzi2.mongodb.net/social-project',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    )
    .then(() => console.log('Connexion à la base de donnée etablie'))
    .catch((err) => console.log('Erreur lors de la connexion à la base de donnée', err));
import pyttsx3

# Initialise le moteur vocal
engine = pyttsx3.init()

# Réglage voix masculine (ça dépend de ton ordi, mais souvent la voix 0 est masculine)
voices = engine.getProperty('voices')
engine.setProperty('voice', voices[0].id)  # Essaye 1 si celle-ci est féminine
engine.setProperty('rate', 130)  # Vitesse du flow (130 = posé)
engine.setProperty('volume', 1.0)  # Volume max

# Texte complet à lire (rap Cockpit)
lyrics = """
Refrain :
Cockpit, dans l’ciel on fait nos lois.
J’vois l’avenir, même dans l’brouillard, j’ai la foi.
Trop d’nuits sans sommeil, trop d’frères dans le noir.
Mais on s’envole ensemble, on vise l’or, on vise la gloire.

Cockpit, que des vrais, pas d’passager.
Si t’as trahi une fois, on t’laisse pas re-nager.
On trace notre route, pas l’temps d’nager dans l’passé.
Équipage soudé, j’vois personne nous remplacer.

Couplet 1 :
J’viens d’là où les murs parlent plus que les hommes.
Où t’apprends la vérité dans l’silence des gommes.
On a grandi dans l’froid, dans le feu, dans les ruelles.
Mais nos liens sont plus forts qu’un serment éternel.

Cockpit, c’est l’escouade, l’élite sans grade.
On a vu tomber des anges, on a relevé les drames.
J’ai vu des regards s’éteindre sous l’poids du réel.
Mais on garde le cap, on pilote sous ciel cruel.

Couplet 2 :
Parfois j’doute, parfois j’flanche, mais j’cache bien l’dégât.
Le cœur blindé, les larmes, j’les range derrière mes pas.
Frérot m’a dit : “On n’a qu’le ciel pour vrai plafond.”
Alors on vise haut, même si l’sol veut nous faire prison.

J’écris la rage sur des beats, comme un cri d’secours.
Mais dans l’cockpit, j’ai trouvé l’calme dans la foudre.
On est pas là pour flex, on est là pour marquer l’époque.
Et si le monde tourne mal, nous on reste droit sur le bloc.

Couplet 3 :
Y’a eu des soirs où j’voulais tout lâcher, tout cramer.
Mais l’groupe m’a r’tenu, m’a dit “Reprends l’manche, faut voler.”
On est montés sans ailes, portés par nos blessures.
Chaque cicatrice est un souvenir de ce qu’on endure.

J’rappe pas pour l’buzz, j’rappe pour ceux qui tiennent bon.
Pour ceux qu’on oublie, mais qui valent des millions.
Cockpit c’est une famille, pas juste un blaze d’crew.
C’est des frères, des choix, des rêves qu’on tient à bout.

Refrain final :
Cockpit, dans l’ciel on fait nos lois.
J’vois l’avenir, même dans l’brouillard, j’ai la foi.
Trop d’nuits sans sommeil, trop d’frères dans le noir.
Mais on s’envole ensemble, on vise l’or, on vise la gloire.

Cockpit, que des vrais, pas d’passager.
Si t’as trahi une fois, on t’laisse pas re-nager.
On trace notre route, pas l’temps d’nager dans l’passé.
Équipage soudé, j’vois personne nous remplacer.
"""

# Enregistre dans un fichier MP3
engine.save_to_file(lyrics, "cockpit_rap.mp3")
engine.runAndWait()

print("✅ Audio généré : cockpit_rap.mp3")

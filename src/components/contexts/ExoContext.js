import {createContext} from 'react'


const Exercices = {
    A1: {content:'Crunch standard. Pieds au sol avec monter rapide du haut du corps. Abdominaux : partie haute', id:'A1'},
    A2: {content:'Crunch standard. Pieds en l’air. Genou à 90°. Abdominaux : partie haute', id:'A2'},
    A3: {content:'Jambes tendues verticalement. Les mains vont chercher les chevilles. Abdominaux : partie haute', id:'A3'},
    A4: {content:'Montée / descente des jambes. Jambes tendues. Dos et tête au sol. Abdominaux : partie basse', id:'A4'},
    A5: {content:'Montée / descente des jambes. Jambes plié (garder immobile). Mouvement jusqu’à enroulement du dos. Abdominaux : partie basse', id:'A5'},
    A6: {content:'Equilibre sur les fesses. Les jambes et le corps forment chacun un angle de 45° avec le sol. Variante plus facile : poser les coudes Abdominaux : Partie basse et haute', id:'A6'},
    A7: {content:'Monté du haut du corps en gardant les jambes à plat sur le sol', id:'A7'},
    P1: {content:'Pompe largeur d’épaules', id:'P1'},
    P2: {content:'Pompe largeur de hanche', id:'P2'},
    P3: {content:'Pompe mains serrées', id:'P3'},
    P4: {content:'Pompes lente. Rester en bas 1 à 5 secondes puis remonter.', id:'P4'},
    G1: {content:'Position de gainage de base. Position statique', id:'G1'},
    G2: {content:'Lever une jambe après l’autre', id:'G2'},
    G3: {content:'Se mettre en appuis sur les bras puis redescendre en position de base. Montée en 2 temps. Bras tendus.', id:'G3'},
    G4: {content:'Poser une main en avant puis se remettre en position de base. Exécuter le mouvement avec l’autre main', id:'G4'},
    G5: {content:'Mouvement d’oscillation avant-arrière en position de base.', id:'G5'},
    G6: {content:'Lever en même temps bras droit et jambe gauche puis revenir en position de base puis inverser.', id:'G6'},
    L1: {content:'Position de gainage latéral de base. Position statique', id:'L1'},
    L2: {content:'Mouvement d’oscillation de la hanche.', id:'L2'},
    L3: {content:'Lever la jambe libre ainsi que le bras libre. Maintenir la position statique', id:'L3'},
    L4: {content:'Rotation du haut du corps « twist ». Le torse regarde le sol puis reviens. Les appuis ne bouge pas pendant le mouvement', id:'L4'},
    J1: {content:'Descendre aussi bas que possible en gardant le dos droit et la totalité du pied sur le sol (talon et pointe de pied)', id:'J1'},
    J2: {content:'Enchaîner avec un saut à la sortie du squat', id:'J2'},
    J3: {content:'Jambes écartées, descendre le genou de la jambe arrière et remonter. Toucher le sol avec le genou lors de chaque fente', id:'J3'},
    J4: {content:'Debout (avec un appui sur une chaise ou un mur), travail l’adducteur en levant une jambe sur le côté. Tenir la jambe 1 seconde au sommet de l’amplitude puis changer de jambe', id:'J4'},
    J5: {content:'Se mettre en position chaise contre un mur et rester immobile pendant le temps imparti', id:'J5'}
}

const exoContext = createContext(Exercices);


export default exoContext


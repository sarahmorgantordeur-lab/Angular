// Le mot-clé 'export' rend ce modèle utilisable partout dans l'app
export interface Developer {
id: number; // Obligatoire, doit être un nombre
lastName: string; // Obligatoire, texte
firstName: string; // Obligatoire, texte
role: string; // Pour l'instant un texte simple ('Dev', 'Lead'...)
skills: string[]; // Un tableau contenant UNIQUEMENT des chaînes de caractères
}
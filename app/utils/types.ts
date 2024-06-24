export type Fontaine = {
  gid: string;
  nom: string;
  no_voirie_pair: string;
  no_voirie_impair: string;
  adresse: string;
  arrondissement: string;
  dispo: string;
};

export type Equipement = {
  identifiant: string;
  nom: string;
  type: string;
  payant: string;
  adresse: string;
  arrondissement: string;
  statut_ouverture: string;
  horaires_periode: string;
  horaires_dimanche: string;
  horaires_jeudi: string;
  horaires_lundi: string;
  horaires_mardi: string;
  horaires_mercredi: string;
  horaires_samedi: string;
  horaires_vendredi: string;
  geo_point_2d: { lon: number; lat: number };
};

export type EspaceVert = {
  identifiant: string;
  nsq_espace_vert: string;
  nom: string;
  type: string;
  adresse: string;
  arrondissement: string;
  statut_ouverture: string;
  ouvert_24h: string;
  canicule_ouverture: string;
  ouverture_estivale_nocturne: string;
  horaires_periode: string;
  categorie: string;
  horaires_dimanche: string;
  horaires_jeudi: string;
  horaires_lundi: string;
  horaires_mardi: string;
  horaires_mercredi: string;
  horaires_samedi: string;
  horaires_vendredi: string;
  geo_point_2d: { lon: number; lat: number };
};

export type GeneralType = Fontaine | Equipement | EspaceVert;

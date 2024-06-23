export type Fontaine = {
  gid: String;
  nom: String;
  no_voirie_pair: String;
  no_voirie_impair: String;
  adresse: String;
  arrondissement: String;
  dispo: String;
};

export type Equipement = {
  identifiant: String;
  id_dicom: String;
  nom: String;
  type: String;
  payant: String;
  adresse: String;
  arrondissement: String;
  statut_ouverture: String;
  horaires_periode: String;
};

export type EspaceVert = {
  identifiant: String;
  nsq_espace_vert: String;
  nom: String;
  type: String;
  p_vegetation_h: String;
  proportion_vegetation_haute: String;
  adresse: String;
  arrondissement: String;
  statut_ouverture: String;
  ouvert_24h: String;
  canicule_ouverture: String;
  ouverture_estivale_nocturne: String;
  horaires_periode: String;
  categorie: String;
};

export type GeneralType = Fontaine | Equipement | EspaceVert;

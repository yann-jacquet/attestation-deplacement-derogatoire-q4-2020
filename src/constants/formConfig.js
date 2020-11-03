export const formConfig = [
  {
    name: "firstname",
    type: "text",
    label: "Prénom",
    autoComplete: "given-name",
    placeholder: "Prénom"
  },
  {
    name: "lastname",
    type: "text",
    label: "Nom",
    autoComplete: "family-name",
    placeholder: "Nom"
  },
  {
    name: "birthday",
    type: "text",
    label: "Date de naissance : 01/01/1989",
    autoComplete: "birthday",
    pattern: "^([0][1-9]|[1-2][0-9]|30|31)\/([0][1-9]|10|11|12)\/(19[0-9][0-9]|20[0-1][0-9]|2020)",
    maxLength: 10,
    placeholder: "Date de naissance : 01/01/1989"
  },
  {
    name: "placeofbirth",
    type: "text",
    label: "Lieu de naissance",
    autoComplete: "off",
    placeholder: "Lieu de naissance"
  },
  {
    name: "address",
    type: "text",
    label: "Adresse",
    autoComplete: "adress-line1",
    placeholder: "Adresse"
  },
  {
    name: "city",
    type: "text",
    label: "Ville",
    autoComplete: "address-level2",
    placeholder: "Ville"
  },
  {
    name: "zipcode",
    type: "number",
    label: "Code Postal",
    autoComplete: "postal-code",
    placeholder: "Code Postal",
    inputMode: "numeric",
    pattern: "[0-9]{5}",
    min: 1000,
    max: 99999,
    minLength: 4,
    maxLength: 5
  }
]

export const formReasons = [
  {
    code: "travail",
    label: "Déplacements entre le domicile et le lieu d'exercice de l'activité professionnelle ou les déplacements professionnels ne pouvant être différés"
  },
  {
    code: "achats",
    label: "Déplacements pour effectuer des achats de fournitures nécessaires à l'activité professionnelle, des achats de première nécessité"
  },
  {
    code: "sante",
    label: "Consultations et soins ne pouvant être assurés à distance et ne pouvant être différés et l’achat de médicaments ;"
  },
  {
    code: "famille",
    label: "Déplacements pour motif familial impérieux, pour l'assistance aux personnes vulnérables et précaires ou la garde d'enfants ;"
  },
  {
    code: "handicap",
    label: "Déplacements des personnes en situation de handicap et de leur accompagnant ;"
  },
  {
    code: "sport_animaux",
    label: "Déplacements brefs, dans la limite d'une heure quotidienne et dans un rayon maximal d'un kilomètre autour du domicile, liés soit à l'activité physique individuelle des personnes, à l'exclusion de toute pratique sportive collective et de toute proximité avec d'autres personnes, soit à la promenade avec les seules personnes regroupées dans un même domicile, soit aux besoins des animaux de compagnie ."
  },
  {
    code: "convocation",
    label: " Convocation judiciaire ou administrative et rendez-vous dans un service public ;"
  },
  {
    code: "missions",
    label: " Participation à des missions d'intérêt général sur demande de l'autorité administrative ;"
  },
  {
    code: "enfants",
    label: "Déplacement pour chercher les enfants à l’école et à l’occasion de leurs activités périscolaires ;"
  }
]

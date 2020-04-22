const Enum_Register_Error_CODE = {
    USER_NOT_EXITED: "401001",
    EMAIL_NOT_CONFIRMED: "401002",

}


const ENUM_TYPE_QUESTION = {
    MultiSelection: 0,
    SingleSelection: 1,
    LinearScale: 2,
    YesNo: 3,
    TextInput: 4

}


export const ENUM_USER_STATUS = {
    'Desactivé': 0,
    'En attente de validation': 1,
    'En sommeil': 2,
    'En recherche': 3,
    'Lié avec': 4,
    'Récréation': 5,
    'Images de rejetées': 6,
    Broken: 7,
}

export const ENUM_DAY = [
    { Monday: 'Lundi' },
    { Tuesday: 'Mardi' },
    { Wednesday: 'Mercredi' },
    { Thursday: 'Jeudi' },
    { Friday: 'Vendredi' },
    { Saturday: 'Samedi' },
    { Sunday: 'Dimanche' },
]

export const ENUM_APPOINTMENT_GUEST_STATUSES = {
    RestaurantConfirm: 0,
    ScheduleConfirm: 1,
    ReScheduleConfirm: 2,
    Ready: 3,
    Delay: 4,
    ResetSchedule: 5,
    Broken: 6,
    Finished: 7,
}

export const ENUM_APPOINTMENT_STATUSES = {
    Pending: 0,
    Approved: 1,
    Broken: 2,
    Finished: 3
}

export const ENUM_UPLOAD_IMAGE = {
    FontIdImage: 0,
    BackIdImage: 1,
    MediumShotImage: 2,
    AmericanShotImage: 3,
    CloseUpShotImage: 4,
    Orther: 5
}

export default { Enum_Register_Error_CODE, ENUM_TYPE_QUESTION, ENUM_DAY, ENUM_UPLOAD_IMAGE }
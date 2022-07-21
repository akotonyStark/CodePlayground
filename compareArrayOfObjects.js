const employeeLanguageType = [
    {
        "id": "48f6ee0c-baae-4766-8601-1384ee2df0f4",
        "code": "LAN0003",
        "name": "Spanish"
    },
    {
        "id": "d0770aa8-41c6-448c-8476-34f2b11988a8",
        "code": "LAN002",
        "name": "French"
    },
    {
        "id": "f925cefb-8f98-4277-b36d-92631ade1e6c",
        "code": "LAN0001",
        "name": "English"
    }
];
const viewInfo =[
    {
        "id": "e4a87fe5-46b2-47c4-b96a-8f68705ceb0c",
        "read": 3,
        "speak": 2,
        "write": 3,
        "language": {
            "id": "48f6ee0c-baae-4766-8601-1384ee2df0f4",
            "code": "LAN0003",
            "name": "Spanish"
        },
        "employee": {
            "id": "514ba0ac-e65e-4d20-b553-4d61c5f52e9f",
            "firstName": "Michael",
            "lastName": "Ameyaw",
            "staffId": "PSL1002",
            "status": false
        }
    },
    {
        "id": "ff5f39b8-086e-41ae-8b93-d42e9875edc5",
        "read": 2,
        "speak": 3,
        "write": 1,
        "language": {
            "id": "f925cefb-8f98-4277-b36d-92631ade1e6c",
            "code": "LAN0001",
            "name": "English"
        },
        "employee": {
            "id": "514ba0ac-e65e-4d20-b553-4d61c5f52e9f",
            "firstName": "Michael",
            "lastName": "Ameyaw",
            "staffId": "PSL1002",
            "status": false
        }
    }
]
let missingLanguages = []
let existingLanguages = []


employeeLanguageType.forEach((lang) => {
    viewInfo.forEach((info) => {
        if( info.language.name === lang.name){
            existingLanguages.push(lang)
        }
    })
})

console.log("Existing Options:", existingLanguages)

missingLanguages = employeeLanguageType
                 .filter(x => !existingLanguages.includes(x))
                 .concat(existingLanguages.filter(x => !employeeLanguageType.includes(x)));
console.log("Missing Options:", missingLanguages)   

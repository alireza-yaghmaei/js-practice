
import { orderBy } from "lodash";

type PersonType = {
    id:number; name:string; familyName:string; age:number; job:string; marriageStatus:MarriageStatusType;
    gender:GenderType; height:number; weight:number; phoneNumber:string;
}
let arr : PersonType[] = [];

type MarriageStatusType = "married" | "single";
type GenderType = "male" | "female";
const addPerson = (id:number, name:string, familyName:string, age:number, job:string, marriageStatus:MarriageStatusType,
                    gender:GenderType, height:number, weight:number, phoneNumber:string) : PersonType[] => {
    let person : PersonType = {
        id,
        name,
        familyName,
        age,
        job,
        marriageStatus,
        gender,
        height,
        weight,
        phoneNumber
    }
    arr.push(person);
    return(arr);
};

const deletePerson = (id:number) : PersonType[] => {
    for (let index:number = 0; index < arr.length; index++) {
        if (arr[index]["id"]===id) {
            arr.splice(index,1);
        }
    }
    return(arr);
};

type EditSectionType = "id" | "name"| "familyName"| "age"| "job"| "marriageStatus"| "gender"| "height"| "weight"| "phoneNumber";
type NewValueType = number | string | MarriageStatusType | GenderType;
const editPerson = (id:number, name:string, familyName:string, age:number, job:string, marriageStatus:MarriageStatusType,
    gender:GenderType, height:number, weight:number, phoneNumber:string) : PersonType[] => {

    for (let index:number = 0; index < arr.length; index++) {
        if (arr[index]["id"]===id) {
            deletePerson(id);
            addPerson(id,name,familyName,age,job,marriageStatus,gender,height,weight,phoneNumber);
            return(arr);
        }
    }
    return(arr);
};

const sortPerson = () : PersonType[] => {
    const sorted = orderBy(arr, ["name"], ["asc"]);
    return(sorted);
}

addPerson(111,"Ali","Shokari",19,"student","single","male",175,80,"09121112223");
addPerson(222,"Reza","Goodarz",27,"engineer","married","male",170,75,"09121112224");
addPerson(333,"Maryam","Ghasemi",31,"doctor","married","female",171,70,"09121112225");
console.log(arr);
console.log("");

editPerson(111,"Shahram","Solati",19,"student","single","male",175,80,"09121112223");
console.log(arr);
console.log("");

deletePerson(222);
console.log(arr);
console.log("");

console.log(sortPerson());






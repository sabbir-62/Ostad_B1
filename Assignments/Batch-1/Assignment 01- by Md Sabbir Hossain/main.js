// Teachers Data
// import instructors data from instructor.js
import {ostadInstructors} from "./instructors.js";
console.log("\n OUR ISNTRUCTORS : \n");

// access every instructor's dataset and print their information
ostadInstructors.map((person, index) => {
    console.log(`Our ${index + 1}st Instructor : `);
    console.log(`${person.name}`);
    console.log(`He is a/an ${person.designation}`);
    console.log(`About ${person.name} : ${person.about}`);

    let achievement = person.achievements.map(achievement => achievement);
    console.log(`His/Her achievements : ${achievement}\n`);
})
// ends


// Students Data
// import students data from students.js
import {studentsData} from "./students.js";
console.log("\n\n OUR STUDENTS\n");

// access every student's dataset and print their information
for(let i = 0; i<studentsData.length; i++){
    console.log(`Name: ${studentsData[i].name}`);
    console.log(`Id: ${studentsData[i].id}`);
    console.log(`Department: ${studentsData[i].department}`);
    console.log(`Institution: ${studentsData[i].institution}`);
    console.log(`Mobile no: ${studentsData[i].mobileNo}`);
    
    for(let j=0; j<studentsData[i].skills.length; j++){
       if(j==0){
        let languages = studentsData[i].skills[j].languages.generalLanguage.map(language => language);
        let programmingLanguages = studentsData[i].skills[j].languages.programmingLanguage.map(language => language);
        console.log(`S/He speaks in ${ languages}`);  
        console.log(`S/He knows about ${programmingLanguages}`);        
       }

       else if(j==1){
        let games = studentsData[i].skills[j].games.map(game => game);
        console.log(`S/He loves to play ${games}`);
       }
    }

    studentsData[i].links.map(link => {
        console.log(`${Object.keys(link)} account link: ${Object.values(link)}`);
    });
    console.log();
}
// ends
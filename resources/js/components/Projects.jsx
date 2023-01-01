import React from 'react';
import project1 from '../../images/dark_room.jpg';
import project2 from '../../images/coder.jpg';
import project3 from '../../images/laravel.jpg';
import Card from './Card';

function Projects(props) {
   const [project_list,setCards] = React.useState(projects)
   const cards_list = []
   project_list.forEach(project => {
    cards_list.push(
        <Card
            image = {project.image}
            description = {project.description}
        />
    )
   });
   const card_rows = []
   const card_row = []
   cards_list.forEach(card => {
        if(card_row.length ==3){
            card_rows.push(card_row)
            card_row.splice(0, card_row.length) //empty the card row array
        }
        card_row.push(card)
   });
    return (
    <div className='wrapper flex flex-col border-2 border-slate-700  rounded mt-3 pb-3 pl-1 pr-1'>
        <div className='intro pt-3 flex justify-center'>
            <span className='text-xl'>Explore the projects completed using various tools in the Web Stack</span>
        </div>
        <div className='flex flex-row gap-4 pt-5'>
            {card_rows}
        </div>
    </div>
    );
}

export default Projects;
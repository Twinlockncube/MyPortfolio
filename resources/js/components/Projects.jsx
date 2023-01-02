import React from 'react';
import project1 from '../../images/dark_room.jpg';
import project2 from '../../images/coder.jpg';
import project3 from '../../images/laravel.jpg';
import Card from './Card';
import CardRow from './CardRow';

function Projects(props) {
   
   const source = [
        {
            description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            image:'https://flowbite.com/docs/images/blog/image-1.jpg',
            title:'Laravel'
        },
        {
            description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            image:'https://flowbite.com/docs/images/blog/image-1.jpg',
            title:'React'
        },
        {
            description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            image:'https://flowbite.com/docs/images/blog/image-1.jpg',
            title:'Javascript'
        },
        {
            description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order',
            image:'https://flowbite.com/docs/images/blog/image-1.jpg',
            title:'CSS'
        },
        
   ]
   const [cards,setCards] = React.useState(source)
   const cards_list = []
   const card_row = []

   cards.forEach(project => {
    cards_list.push(
        <Card
            image = {project.image}
            description = {project.description}
            title = {project.title}
        />
    )
   });
   
   /*Grouping project cards into max 3 per row*/
   const grouper = (result, value, index, array) => {
        if(index%3==0){
            result.push(array.slice(index,index+3))
        }
        return result
   }

   const card_rows = cards_list.reduce(grouper,[])
   card_rows.map(row =>{
        <CardRow row={row}/>
   })
     

   React.useEffect(() => {
    fetch('https://api.quotable.io/random')
      // .then((response) => {response.json() })
       .then((data) => {
          setCards(source);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);




    return (
    <div className='wrapper flex flex-row border-2 border-slate-700  rounded mt-3 pb-3 pl-1 pr-1'>
        <div className='intro pt-3 flex justify-center'>
            <span className='text-xl'>Explore the projects completed using various tools in the Web Stack</span>
        </div>
        <div className='grid grid-row gap-4 pt-5'>
            {card_rows}
        </div>
    </div>
    );
}

export default Projects;
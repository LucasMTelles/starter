const reviews = [
  {
      id: 1,
      name: "Susan Smith",
      job: "Web Developer",
      image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
  },
  {
      id: 2,
      name: "Anna Johnson",
      job: "Web Developer",
      image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
      text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
  },
  {
      id: 3,
      name: "Peter Jones",
      job: "Intern",
      image: "https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg",
      text: "Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa.",
  },
  {
      id: 4,
      name: "Bill Anderson",
      job: "The Boss",
      image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up",
  },
];

const author = document.getElementById('author');
const job = document.getElementById('job');
const image = document.getElementById('image-profile');
const information = document.getElementById('description');

const prevbutton = document.querySelector('.prev-button')
const nextbutton = document.querySelector('.next-button')
const randombutton = document.querySelector('.random-button')

let currentitem = 0;

function showPerson(person){
  const item = reviews[person]
  image.src = item.image
  author.textContent = item.name
  job.textContent = item.job
  information.textContent = item.text
}

nextbutton.addEventListener('click', () => {
  currentitem++

  if(currentitem > reviews.length -1){
    currentitem = 0
  }

  showPerson(currentitem)
})

prevbutton.addEventListener('click', () => {
  currentitem--

  if(currentitem < 0){
    currentitem = reviews.length - 1
  }

  showPerson(currentitem)
})

randombutton.addEventListener('click', () => {
  const randomperson = math.floor(math.random() * reviews.length)
  showPerson(randomperson)
})
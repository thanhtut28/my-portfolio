import roseStream from '@assets/rosestream.png'
import chessBoard from '@assets/chessboard.png'
import hoodiecart from '@assets/hoodiecart.png'

export type Project = {
   title: string
   body: string
   link: string
   image: StaticImageData
}

export const projects: Project[] = [
   {
      title: 'React Hoodie Cart',
      body: `A shopping cart for ordering hoodies. I built it to improve my react skills. You can select variety of hoodies, add to cart and place order. Tech Stacks - React, Redux Toolkit,Bootswatch, Firebase`,
      link: 'https://react-hoodie-cart.netlify.app',
      image: hoodiecart,
   },
   {
      title: 'Rose Streaming Service',
      body: `Streaming Web Application with myanmar and english subtitles developed by me and my backend dev friend. It has two plans, Free and Premium. The Premium plan offers many features such as 'History', 'Resume Play', 'faster servers' and many more. Tech Stacks - Next, Typescript, Material Ui, Meili Search, Apollo Graphql, Strapi, Firebase, PostgresSQL `,
      link: 'https://rosestream.watch',
      image: roseStream,
   },
   {
      title: 'React Chess Game (WIP)',
      body: 'Chess Board built with React. This project is really challenging and I would need more time to finish this project. Making a game with react is pretty fun and I think this project makes me a better react developer. Tech Stacks - React and Redux Toolkit',
      link: 'https://github.com/thanhtut28/react-chess-game',
      image: chessBoard,
   },
]

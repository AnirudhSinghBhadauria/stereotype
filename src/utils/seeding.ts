import { prisma } from "../../prisma/prismaClient";

export const seed = async () => {
  // const seeding = await prisma.mainStory.createMany({
  //   data: [
  //     {
  //       Slug: "x",
  //       genreId: "1fda14d7-71b9-439f-b63c-a9bc5457b343",
  //       authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
  //       ThumbTitle: "Lorem ipsum dolor sit amet consectet?",
  //       ThumbDescription:
  //         "Lorem ipsum dolor sit amet consectetur adipisicing elit Mollitia iure perferendis alias blanditiis molestiae voluptatum, quisquam deserunt obcaecati",
  //       ThumbImageOne:
  //         "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
  //       ThumbImageTwo:
  //         "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
  //       ThumbImageOneDescription:
  //         "This is the alt text for the image, include text for the image too.",
  //       ThumbImageTwoDescription:
  //         "This is the alt text for the image, include text for the image too.",
  //       Summary:
  //         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A quia dolorem excepturi iure ea explicabo dolore eligendi praesentium, doloribus placeat, suscipit tempora voluptatibus ut aut ipsa esse error labore minus! A quia dolorem excepturi iure ea explicabo dolore eligendi praesentium, Lorem ipsum dolor sit amet, consectetur adipisicing elit, lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  //       SummaryHighlighted:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit, Veniam deserunt.",
  //       Reads: 0,
  //       BackgroundColor: "LEAF",
  //       Description: "this is summary of that thing",
  //       Image:
  //         "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
  //       ImageDescription:
  //         "This is the alt text for the image, include text for the image too.",
  //       Tag: "Servo",
  //       Title: "Lorem ipsum dolor sit amet consect?",
  //       IntroPara:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //       ParaTwo:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //       ParaThree:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //       ParaFour:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //       AsideText:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
  //       ParaSeven:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //       ParaEight:
  //         "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
  //     },
  //   ],
  // });
  const seeding = await prisma.sideStory.createMany({
    data: [
      {
        Slug: "v",
        genreId: "1fda14d7-71b9-439f-b63c-a9bc5457b343",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription:
          "This is the alt text for the image, include text for the image too.",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription:
          "This is the alt text for the image, include text for the image too.",
        Tag: "Elon Musk",
        BackgroundColor: "PINK",
        Description: "this is summary of that thing",
        ThumbDescriptionOne:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni quos aliquam qui ratione ducimus um.",
        ThumbDescriptionTwo:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste magni quos aliquam qui ratione ducimus um.",
        Title: "Lorem ipsum dolor sit amet consectetu?",
        ThumbTitle:
          "Lorem, ipsum dolor sitsfgsf amet consectetur its adipisicing elitw.",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
        ParaSeven:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaEight:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
      },
    ],
  });
};

// 1fda14d7-71b9-439f-b63c-a9bc5457b343 - entertainment
// e4d160de-25ac-415f-bf13-496e249f5d30 - news
// e123039d-81cb-404d-8cca-cb99b489116d - review
// ee628c66-dfae-4ae3-85b3-577136a0e5e2 - tech

// 8b589a4c-272f-46c2-b918-21c5601f4773 - author

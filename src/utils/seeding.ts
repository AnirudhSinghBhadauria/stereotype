import { prisma } from "../../prisma/prismaClient";

export const seed = async () => {
  const seeding = await prisma.headlinerStory.createMany({
    data: [
      {
        genreId: "ee628c66-dfae-4ae3-85b3-577136a0e5e2",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Slug: "kthis is fourdf",
        Tag: "kNascartz",
        ThumbTitle:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnz",
        ThumbDescription:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription: "image desc",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription: "Image Desc",
        Title:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnz",
        Description:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
        ParaSeven:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaEight:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
      },
      {
        genreId: "ee628c66-dfae-4ae3-85b3-577136a0e5e2",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Slug: "kthis is fourdff",
        Tag: "kNascartzfff",
        ThumbTitle:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzf",
        ThumbDescription:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription: "image desc",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription: "Image Desc",
        Title:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzf",
        Description:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
        ParaSeven:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaEight:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
      },
      {
        genreId: "ee628c66-dfae-4ae3-85b3-577136a0e5e2",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Slug: "kthis is fourddd",
        Tag: "kNascartzfff",
        ThumbTitle:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfs",
        ThumbDescription:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription: "image desc",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription: "Image Desc",
        Title:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfgf",
        Description:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
        ParaSeven:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaEight:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
      },
      {
        genreId: "ee628c66-dfae-4ae3-85b3-577136a0e5e2",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Slug: "kthis is fourddddf",
        Tag: "kNascartzfff",
        ThumbTitle:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfssdf",
        ThumbDescription:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription: "image desc",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription: "Image Desc",
        Title:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfgfddfs",
        Description:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
        ParaSeven:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaEight:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
      },
      {
        genreId: "ee628c66-dfae-4ae3-85b3-577136a0e5e2",
        authorId: "8b589a4c-272f-46c2-b918-21c5601f4773",
        Slug: "kthis is foux",
        Tag: "kNascartzfj",
        ThumbTitle:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfssdfj",
        ThumbDescription:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",
        ThumbImage:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ThumbImageDescription: "image desc",
        Image:
          "https://cdn.sanity.io/images/aftdl3p2/production/74d2d18244ccaae01920cfd3c5de0b4debe4cba8-580x464.jpg",
        ImageDescription: "Image Desc",
        Title:
          "kLorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnzfgfddfsj",
        Description:
          "Lorem ipsum dolor sit amdfgd consectetur adipisng elit. Magnasf Lorem ipsum dolor",

        IntroPara:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaTwo:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaThree:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        ParaFour:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae. Impedit quia repellendus veniam nemo at, ipsum quasi, eveniet numquam debitis eligendi aperiam accusantium ullam quae.",
        AsideText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem dolorem officia ipsam totam nisi? Impedit",
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

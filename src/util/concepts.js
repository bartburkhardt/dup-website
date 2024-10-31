export const concepts = [
  {
    link: "allaboard",
    title: "AllAboard",
    excerpt: "This is project1",
    description:
      "With AllAboard you are notified about which elevators are broken in your route. Add your most used elevators to your favourites and you will automatically be notified when the elevators are broken or have been fixed.",
    //
    info: [
      {
        title: "Report and share",
        text: "Report using the QR code next to the elevator or via the app. More reports mean more reliable information. If it says verified, the status comes from the service provider.",
        img: "reportandshare",
      },
      {
        title: "Get notified",
        text: "Add your most used elevators to your favourites and get notified about status changes even without actively using the app.",
        img: "getnotified",
      },
    ],
    //
    phases: [
      {
        title: "Research",
        subtitle: "Deskresearch + Field study + Ideation Workshop",
        text: "We started the project with a research phase. To start we conducted deskresearch to find out more about the problem and the target group. Then we did a field study to see for ourselves what the problem is and were the biggest improvements lay. In this field study we tested several things such as the accessibility of the stations, assistance with broken elevators and getting alternative routes in route planners. With all the insights of the research we held an ideation workshop with end users. In this session we ideate for solutions for the problem. This ideation workshop will be the base for the next phase.",
        swiper: 5,
        insights: {
          text: "Out of the research phase we gathered a lot of information, insights and problems about the problem of broken elevators in the public transport of Amsterdam. In the list below we show you the key insights of the research phase.",
          list: ["Insight", "Insight", "Insight", "Insight", "etc."],
        },
        footer: {
          text: "All other issues and insights that are uncovered in the research phase are documented. You can download the findings via the links below:",
          links: [
            {
              name: "Field trip results",
              link: "https://google.com",
              download: true,
            },
            {
              name: "Workshop results",
              link: "https://google.com",
              download: true,
            },
          ],
        },
      },
      {
        title: "Prototype",
        subtitle: "Ideation + Wireframing + Prototype",
        text: "With all the insights of the research phase, we started creating a solution. In the prototype phase we worked out the ideas of the ideation session. We started with sketches which turned into wireframes and eventually into a prototype. The idea that is worked out is the All Aboard app.",
        prototype: {
          title: "AllAboard App",
          text: "Explaining the goal and functionalities of the app briefly and show some screens to support that.",
          features: [
            {
              icon: "report",
              title: "Quick way to report",
              text: "Allow citizens to share wether an elevator is broken between themselves",
            },
            {
              icon: "notify",
              title: "Notifications",
              text: "Get notified whenever there is a disruption in a favourited elevator",
            },
            {
              icon: "numbers",
              title: "Assistance numbers",
              text: "Give the first step into provide help by being transparent about the service provider and phone number",
            },
            {
              icon: "elevators",
              title: "Overview information of the elevators",
              text: "Easy to find elevators through a complete dataset of pictures, dependencies and alternatives",
            },
          ],
        },
        footer: {
          text: "If you want to take a look at the whole prototype, you can view it via the link down below:",
          links: [
            {
              name: "View prototype",
              link: "https://google.com",
              linkIcon: true,
            },
          ],
        },
      },
      {
        title: "Development",
        subtitle: "Multiple development cycles",
        text: "With the first prototype designed it was time to develop the app itself. In multiple development cycles we developed the app to a beta app which was ready to test with the users. In this phase we were busy with developing the backend, frontend and the database of all of the elevators.",
        development: {
          title: "Database of elevators",
          text: "We created a new dataset with:",
          list: [
            "All elevators from public transport in Amsterdam",
            "Pictures",
            "Coordinates",
            "Dependencies",
            "Alternatives",
          ],
        },
        footer: {
          text: "The Github Repo, elevator data and documentation are all documented which you can find via the links below:",
          links: [
            {
              name: "Elevator Data",
              link: "https://google.com",
              linkIcon: true,
            },
            {
              name: "GitHub Repo",
              link: "https://google.com",
              download: true,
            },
            {
              name: "Documentation",
              link: "https://google.com",
              download: true,
            },
          ],
        },
      },
      {
        title: "Test",
        subtitle: "Usability testing",
        text: "In the last phase of the project we held multiple usability tests. The goal of this phase was to get as much feedback as possible from the users. We tested if the concept was helpful, tested the accessibility of the app and also tested future ideas with the users.",
        swiper: 5,
        insights: {
          text: "Out of the test phase we gathered a lot of information, insights and improvements of the app. In the list below we show you the key insights of the test phase.",
          list: ["Insight", "Insight", "Insight", "Insight", "etc."],
        },
        footer: {
          text: "All other issues and insights that are uncovered in the test phase are documented. You can download the findings via the links below:",
          links: [
            {
              name: "Usability test",
              link: "https://google.com",
              download: true,
            },
            {
              name: "Recommendations",
              link: "https://google.com",
              download: true,
            },
          ],
        },
      },
    ],
    colofon: {
      text: "Do you want more information? please contact Claudia and/or Mark",
      partners: [
        { name: "vra", link: "https://google.com" },
        { name: "gvb", link: "https://google.com" },
        { name: "ga", link: "https://google.com" },
        { name: "cb", link: "https://google.com" },
      ],
    },
  },
];

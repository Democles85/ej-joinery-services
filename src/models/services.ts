const services: {
  title: string;
  href: string;
  description: string;
  image: string;
}[] = [
  {
    title: "Sash Windows",
    href: "/services/sash-windows",
    description:
      "Timeless elegance meets modern functionality with our bespoke sash windows!",
    image: "/images/products/sashwindow.webp",
  },
  {
    title: "Front Doors",
    href: "/services/front-doors",
    description:
      "Welcome in style with our stunning front doors, where elegance meets security seamlessly!",
    image: "/images/products/frontdoors.webp",
  },
  {
    title: "Casement Windows",
    href: "/services/casement-windows",
    description:
      "Let fresh air and natural light flood your space with our sleek and energy-efficient casement windows!",
    image: "/images/products/casmentwindow.webp",
  },
  {
    title: "French Doors",
    href: "/services/french-doors",
    description:
      "Step into seamless indoor-outdoor living with our stylish and durable patio doors!",
    image: "/images/products/patiodoor.webp",
  },
  {
    title: "Skylights",
    href: "/services/skylights",
    description:
      "Elevate your space with panoramic views through our contemporary skylights, enhancing your home's allure!",
    image: "/images/products/skylight.jpg",
  },
];

interface Table {
  parts: Part[];
}

interface Part {
  id: string;
  name: string;
  content: Content[];
  features: string[];
}

interface Content {
  description: string;
  image: string;
}

const data: {
  id: string;
  title: string;
  description: string;
  table: Table;
  images: string[];
  object: string;
}[] = [
  {
    id: "sash-windows",
    title: "Sash Windows",
    description:
      "Elevate the charm and functionality of your home with our premium sash windows. Expertly crafted to combine timeless aesthetics with modern performance, our sash windows offer smooth operation, superior insulation, and classic style. Perfect for both traditional and contemporary settings, they are designed to enhance your property's character while providing energy efficiency and durability. Discover the perfect blend of elegance and innovation with our bespoke sash windows.",
    table: {
      parts: [
        {
          id: "brassSashLifts",
          name: "Brass Sash Lifts",
          content: [
            {
              description: "Polished Chrome Solid Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/slch_1.jpg",
            },
            {
              description: "Lacquered Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2023/04/SLLB_MIGHTON_117-1024x1024.jpg",
            },
            {
              description: "Satin Chrome Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/slsc_3.jpg",
            },
          ],
          features: [
            "Sash lifts act as handles to raise the sash",
            "They are traditionally fitted to the bottom sash",
            "Sash lifts are suitable for interior use only",
            "Our premium sash lifts are all made from solid brass",
            "Overall height 45mm, projection 33mm",
            "Mounting plate size 50mm x 17mm",
            "Available in a range of finishes",
            "Our lacquered brass sash lifts have lacquered to help prevent tarnishing since helps reduce tarnishing",
          ],
        },
        {
          id: "valueDeeHandles",
          name: "Value Dee Handles",
          content: [
            {
              description: "Value Dee Handle Polished Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deechz_1.jpg",
            },
            {
              description: "Value Dee Handle PVD Brass",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deepvdz_1.jpg",
            },
            {
              description: "Value Dee Handle Satin Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deescz_1.jpg",
            },
          ],
          features: [
            "Usually fitted to the top sash",
            "Used to raise or lower the sash",
            "Two are usually fited, one on each side of the sash",
            "Available in a range of finishes",
            "10W x 130L x 20H (mm)",
          ],
        },
        {
          id: "migstopSashRestrictor",
          name: "Migstop Sash Restrictor",
          content: [
            {
              description: "Migstop Sash Restrictor Polished Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/migstop_chrome.jpg",
            },
            {
              description: "Migstop Sash Restrictor Lacquered Brass",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/migstop_brass.jpg",
            },
            {
              description: "Migstop Sash Restrictor Satin Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/migstop_satin_chrome.jpg",
            },
            {
              description: "Migstop Sash Restrictor Antique Brass",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/mini_ventlock_ant_brass_web.jpg",
            },
          ],
          features: [
            "The Migstop barrel is 20mm long & 16mm in diameter",
            "The Migstop was developed for home security & ventilation",
            "It allows the sash to be left opened a few inches without compromising security or safety",
          ],
        },
        {
          id: "hookingSashFastenerLocking",
          name: "Hooking Sash Fastener Locking",
          content: [
            {
              description: "Hooking Sash Fastener Locking Satin Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/hooklocksc_1.jpg",
            },
            {
              description: "Hooking Sash Fastener Locking Antique Brass",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/HOOKLOCKABR-1024x1024.jpg",
            },
            {
              description: "Hooking Sash Fastener Locking Polished Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/hooklock_1.jpg",
            },
            {
              description: "Hooking Sash Fastener Locking Antique Pewter",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2024/01/HOOKLOCKAP.jpg",
            },
          ],
          features: [
            "Hooking sash fasteners have a dual action",
            "The hook pulls the sashes together reducing draughts and also upward helping line up the tops of your sashes for a neater appearance",
            "Hooking sash fastener come with a with slim keep that will fit on most sash rails",
            "Locking",
            "Traditional antique design",
            "Hook allows adjustment in height and pulls meeting rails together",
            "Suitable for single and double-glazed windows",
            "Solid brass with a range of finishes",
            "Lacquered brass finish has a clear protective lacquer to help reduce tarnishing",
            "Works with meeting rail (joinery to joinery) gaps of 2mm - 5mm",
          ],
        },
      ],
    },
    images: [
      "https://static.wixstatic.com/media/a43a98_084138f7af924e30a05d147060d4413a~mv2_d_1200_1600_s_2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_084138f7af924e30a05d147060d4413a~mv2_d_1200_1600_s_2.webp",
      "https://static.wixstatic.com/media/a43a98_24e7c1d4cae84a7b86df1689fcc375ee~mv2.jpg/v1/fit/w_540,h_547,q_90/a43a98_24e7c1d4cae84a7b86df1689fcc375ee~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_5d92b9d079604b4d9dda999a776c9076~mv2.jpg/v1/fit/w_720,h_547,q_90/a43a98_5d92b9d079604b4d9dda999a776c9076~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_65d33cb0fa1b4db0838468d4d6fd9442~mv2.jpg/v1/fit/w_720,h_547,q_90/a43a98_65d33cb0fa1b4db0838468d4d6fd9442~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_45d2014306e94da0906d922027f3e70d~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_45d2014306e94da0906d922027f3e70d~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_ebb4d7a728b84a11aa6237a9a912e469~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_ebb4d7a728b84a11aa6237a9a912e469~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_ae5f0ba5c41c4f209f975dffc1ee6481~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_ae5f0ba5c41c4f209f975dffc1ee6481~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_8fa8e75ba97241e3897716fb274aaa7b~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_8fa8e75ba97241e3897716fb274aaa7b~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_96a31f3b93c44852843b34d716e8e27f~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_96a31f3b93c44852843b34d716e8e27f~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_186f5b0080b44c46a6386dd7261c3ad4~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_186f5b0080b44c46a6386dd7261c3ad4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_7d0253e9dcb84bc99f7f26dc8d04fa8a~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_7d0253e9dcb84bc99f7f26dc8d04fa8a~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_3689389b4e154588992fe01daf9b16d4~mv2.jpg/v1/fit/w_720,h_547,q_90/a43a98_3689389b4e154588992fe01daf9b16d4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_434dc94bc9be4708bcaff19db73f5e61~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_434dc94bc9be4708bcaff19db73f5e61~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_5ed9e73808254b0f9a4a81fe0801577c~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_5ed9e73808254b0f9a4a81fe0801577c~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_de56466428f8448fac3df6a4469684b1~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_de56466428f8448fac3df6a4469684b1~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_a441fc33fcbe428b93e8990db05b2117~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_a441fc33fcbe428b93e8990db05b2117~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_7f73244dc15347688b9100e7b4e93963~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_7f73244dc15347688b9100e7b4e93963~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_87e4916e258c4caaa5a15e767ecd2f09~mv2.jpg/v1/fit/w_1200,h_547,q_90/a43a98_87e4916e258c4caaa5a15e767ecd2f09~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_cb6b45f5c3c04f858633ef6878839831~mv2.jpg/v1/fit/w_1356,h_547,q_90/a43a98_cb6b45f5c3c04f858633ef6878839831~mv2.webp",
    ],
    object:
      "https://sketchfab.com/models/97a12d5d12fa440f8e547766ed5b4eb2/embed?autospin=1&ui_theme=dark",
  },
  {
    id: "front-doors",
    title: "Front Doors",
    description:
      "Make a Grand Entrance with Our Front Doors. Enhance your home's curb appeal with our exceptional front doors, crafted for both style and security. Our doors offer a perfect blend of elegance and durability, making a striking first impression while ensuring energy efficiency and protection. Available in a range of designs and finishes, they provide the ideal welcome to your home. Upgrade your entryway with our high-quality front doors and create a lasting impact today!",
    table: {
      parts: [
        {
          id: "frontDoorHinges",
          name: "Front Door Hinges",
          content: [
            {
              description: "Satin Front Door Hinges",
              image: "/images/front_door/satin_hinge.png",
            },
            {
              description: "Polished Front Door Hinges",
              image: "/images/front_door/polished_hinge.png",
            },
            {
              description: "Satin Brass Front Door Hinges",
              image: "/images/front_door/satin_brass.png",
            },
          ],
          features: [
            "102mm (L) x 76mm (W) x 3mm (D)",
            "High-quality, precision-engineered, smooth action hinges",
            "Featuring 2 ball bearing races within the hinge leaf for durability",
            "Suitable for use on regular doors & fire doors between 40-44 mm thick",
            "5-year manufacturer's warranty",
          ],
        },
        {
          id: "frontDoorLocks",
          name: "Front Door Locks",
          content: [
            {
              description: "Front Door Satin Lock",
              image: "/images/front_door/locks.png",
            },
          ],
          features: [
            "Lever Mortice Deadlock 65mm Case - 45mm Backset",
            "Fire Rated to 30 & 60mins",
            "Anti-Drill Lock Case",
            "Anti-Drill Hardened Deadbolt",
            "100 Key Variations",
            "Reversible Latch",
          ],
        },
      ],
    },
    images: [
      "https://static.wixstatic.com/media/a43a98_f67eb8117d854c53a086a33f860cefab~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_f67eb8117d854c53a086a33f860cefab~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_03c804c929f644ddaafab95a9fbef761~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_03c804c929f644ddaafab95a9fbef761~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_24519f48fa38431382a1cc4e3c110e6e~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_24519f48fa38431382a1cc4e3c110e6e~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_8eb55cb09406437a9e1bca06b8f9b1fa~mv2.jpg/v1/fit/w_1670,h_763,q_90/a43a98_8eb55cb09406437a9e1bca06b8f9b1fa~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_5d6f4e368ca240f59fff08c3b62e3961~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_5d6f4e368ca240f59fff08c3b62e3961~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_016f469f97014096979381ce7c60ed75~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_016f469f97014096979381ce7c60ed75~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_48666ecb67d44f3bb423d6e538ea1006~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_48666ecb67d44f3bb423d6e538ea1006~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_36a9a7b524354c19b19e2fdc7c671689~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_36a9a7b524354c19b19e2fdc7c671689~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_d6d8c212a97a4344bdac4ba9605a5c66~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_d6d8c212a97a4344bdac4ba9605a5c66~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_dfa6e5a8e5094928b1f09b638704e5eb~mv2.jpg/v1/fit/w_1574,h_763,q_90/a43a98_dfa6e5a8e5094928b1f09b638704e5eb~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_0ae6420fe8ad487ea0f5e6f819fb233c~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_0ae6420fe8ad487ea0f5e6f819fb233c~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_4930fcdad0844c84ac8290dc9734c6d0~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_4930fcdad0844c84ac8290dc9734c6d0~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_d0758a8440bd42ba9df94ede1b525478~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_d0758a8440bd42ba9df94ede1b525478~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_79bfba09f24b44c6a463f57c3ff6a23e~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_79bfba09f24b44c6a463f57c3ff6a23e~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_584eabeae62b413a969e557dafd4d31b~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_584eabeae62b413a969e557dafd4d31b~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_1f0e01dc917047b3b982d94d86c042a7~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_1f0e01dc917047b3b982d94d86c042a7~mv2.webp",
    ],
    object:
      "https://sketchfab.com/models/a9b3401080cc421ea3dc30f845aba510/embed?autospin=1&ui_theme=dark",
  },
  {
    id: "casement-windows",
    title: "Casement Windows",
    description:
      "Enhance Your View with Stylish Casement Windows. Upgrade your home with our elegant casement windows, designed to offer exceptional ventilation and unobstructed views. With their sleek, modern design and superior energy efficiency, our casement windows not only enhance the look of your space but also provide smooth, easy operation. Enjoy a breath of fresh air and a touch of sophistication with our high-quality casement windows. Elevate your home's comfort and style today!",
    table: {
      parts: [
        {
          id: "standardWindowHandles",
          name: "Standard Window Handles",
          content: [
            {
              description: "Polished Chrome Standard Window Handles",
              image:
                "/images/casement_windows/standard_window_handles/chrome.png",
            },
            {
              description: "White Standard Window Handles",
              image:
                "/images/casement_windows/standard_window_handles/white.png",
            },
            {
              description: "Polished Brass Standard Window Handles",
              image:
                "/images/casement_windows/standard_window_handles/polished_brass.png",
            },
            {
              description: "Bright Bronze Standard Window Handles",
              image:
                "/images/casement_windows/standard_window_handles/bright_bronze.png",
            },
            {
              description: "Black Standard Window Handles",
              image:
                "/images/casement_windows/standard_window_handles/black.png",
            },
          ],
          features: [
            "Universal espagnolette uPVC window handle supplied with a choice of 5 clip-in spindle lengths (9, 15, 30, 43 and 55mm)",
            "The rose conceals an internal 90° stop which prevents the gearbox over-stressing",
            "The ergonomic push button assembly offers effortless operation",
            "Zinc Alloy Construction",
            "9-55mm Spindle",
            "Lockable",
            "Comfort Finger Grips",
            "Simple to Fit",
            "Easy Action Internal Handle",
            "Close-Fitting",
          ],
        },
        {
          id: "standardPegstays",
          name: "Standard Pegstays",
          content: [
            {
              description: "Chrome Plated Standard Pegstay",
              image:
                "/images/casement_windows/standard pegstays/chrome plated.png",
            },
            {
              description: "Black Standard Pegstay",
              image: "/images/casement_windows/standard pegstays/black.png",
            },
            {
              description: "Polished Brass Standard Pegstay",
              image:
                "/images/casement_windows/standard pegstays/polished brass.png",
            },
            {
              description: "White Standard Pegstay",
              image: "/images/casement_windows/standard pegstays/white.png",
            },
          ],
          features: [
            "10-year mechanical guarantee on all hardware",
            "Cycle tested to 20,000 cycles",
            "10-year surface finish warranty against peeling, cracking or discoloration",
            "Corrosion tested to BS EN 1670 Grade 5",
            "Salt spray tested for 480 hours",
          ],
        },
        {
          id: "monkeytailWindowHandles",
          name: "Monkeytail Window Handles",
          content: [
            {
              description: "Black Monkeytail Window Handles",
              image:
                "/images/casement_windows/Monkeytail Window Handles/normal_black.png",
            },
            {
              description: "Antique Monkeytail Window Handles",
              image:
                "/images/casement_windows/Monkeytail Window Handles/normal_antique.png",
            },
            {
              description: "Large Black Monkeytail Window Handles",
              image:
                "/images/casement_windows/Monkeytail Window Handles/large_black.png",
            },
            {
              description: "Large Pewter Monkeytail Window Handles",
              image:
                "/images/casement_windows/Monkeytail Window Handles/large_powder.png",
            },
          ],
          features: [
            "Spindle size: 40mm",
            "Distance between screw holes is 43mm",
            "The spindle is marked at 5mm increments to allow easy cutting if a shorter spindle length is required",
            "Spindle width is 7mm",
            "Retains the classic looks of period windows; but compatible with modern locking systems",
            "Harder wearing finish than traditional wrought iron furniture",
            "Security enabled",
          ],
        },
        {
          id: "peardropWindowHandles",
          name: "Peardrop Window Handles",
          content: [
            {
              description: "Polished Chrome Peardrop Window Handles",
              image:
                "/images/casement_windows/peardrop_window_handles/polished chrome.png",
            },
            {
              description: "Black Peardrop Window Handles",
              image:
                "/images/casement_windows/peardrop_window_handles/black.png",
            },
            {
              description: "Polished Brass Peardrop Window Handles",
              image:
                "/images/casement_windows/peardrop_window_handles/polished brass.png",
            },
            {
              description: "Satin Chrome Peardrop Window Handles",
              image:
                "/images/casement_windows/peardrop_window_handles/satin chrome.png",
            },
            {
              description: "Antique Pewter Peardrop Window Handles",
              image:
                "/images/casement_windows/peardrop_window_handles/antique pewter.png",
            },
          ],
          features: [
            "Gold, Chrome & Brushed Satin handles are HARDEX® coated",
            "Antique is a black hammer finish polyester powder coat (PPC)",
            "Strength tested to equivalent of a modern espagnolette window handle",
            "Harder wearing finish than traditional wrought iron furniture",
            "Supplied with croppable 40mm spindle which allows cropping to 5mm increments",
            "Corrosion resistance",
          ],
        },
        {
          id: "monkeytailPegstays",
          name: "Monkeytail Pegstays",
          content: [
            {
              description: "Black Monkeytail Pegstays",
              image: "/images/casement_windows/monkeytail_pegstays/black.png",
            },
            {
              description: "Antique Pewter Monkeytail Pegstays",
              image: "/images/casement_windows/monkeytail_pegstays/black.png",
            },
            {
              description: "Pewter Monkeytail Pegstays",
              image: "/images/casement_windows/monkeytail_pegstays/pewter.png",
            },
          ],
          features: [
            "Ideal for period properties and traditional homes with wooden window frames",
            "The window stays are made from quality cast iron and have a hardwearing black epoxy finish",
            "The black epoxy finish will protect the window stays from rusting",
            "Material: Solid Cast Iron",
            "Size: 8, 10 & 12 inches",
          ],
        },
        {
          id: "peardropLockingStayPins",
          name: "Peardrop Locking Stay Pins",
          content: [
            {
              description: "Polished Chrome Peardrop Locking Stay Pins",
              image:
                "/images/casement_windows/Peardrop_locking_stay_pins/polished chrome.png",
            },
            {
              description: "Black Peardrop Locking Stay Pins",
              image:
                "/images/casement_windows/Peardrop_locking_stay_pins/polished brass.png",
            },
            {
              description: "Satin Chrome Peardrop Locking Stay Pins",
              image:
                "/images/casement_windows/Peardrop_locking_stay_pins/satin chrome.png",
            },
            {
              description: "Pewter Peardrop Locking Stay Pins",
              image:
                "/images/casement_windows/Peardrop_locking_stay_pins/pewter.png",
            },
          ],
          features: [
            "Locking stay pins replace the standard pins supplied with casement stays",
            "The locking cap can only be removed by use of a key",
            "Stops the window casement stay from being lifted and as a result 'locks' the window",
            "Length 39mm",
            "Width 15mm",
            "High quality product",
          ],
        },
        {
          id: "peardropPegstays",
          name: "Peardrop Pegstays",
          content: [
            {
              description: "Polished Chrome Peardrop Pegstays",
              image:
                "/images/casement_windows/Peardrop Pegstays/polished chrome.jpg",
            },
            {
              description: "Black Peardrop Pegstays",
              image: "/images/casement_windows/Peardrop Pegstays/black.jpg",
            },
            {
              description: "Polished Brass Peardrop Pegstays",
              image:
                "/images/casement_windows/Peardrop Pegstays/polished brass.jpg",
            },
            {
              description: "Satin Chrome Peardrop Pegstays",
              image:
                "/images/casement_windows/Peardrop Pegstays/satin chrome.jpg",
            },
            {
              description: "Antique Pewter Peardrop Pegstays",
              image:
                "/images/casement_windows/Peardrop Pegstays/antique pewter.png",
            },
          ],
          features: [
            "Gold, Chrome & Brushed Satin handles are HARDEX® coated",
            "Harder wearing finish than traditional wrought iron furniture",
            "High quality zinc for all finishes",
            "Corrosion resistance meets the requirements of BSEN 1670:2007 Grade 5 (480 hours)",
          ],
        },
        {
          id: "hintonWindowHandles",
          name: "Hinton Window Handles",
          content: [
            {
              description: "Polished Chrome Hinton Window Handles",
              image:
                "/images/casement_windows/hinton window handles/polished chrome.png",
            },
            {
              description: "Aged Brass Hinton Window Handles",
              image:
                "/images/casement_windows/hinton window handles/aged brass.png",
            },
            {
              description: "Aged Bronze Hinton Window Handles",
              image:
                "/images/casement_windows/hinton window handles/aged bronze.png",
            },
            {
              description: "Polished Nickel Hinton Window Handles",
              image:
                "/images/casement_windows/hinton window handles/polished nickel.png",
            },
            {
              description: "Polished Brass Hinton Window Handles",
              image:
                "/images/casement_windows/hinton window handles/polished brass.png",
            },
          ],
          features: [
            "The hinton handle is a decorative Georgian design that will suit any setting",
            "Designed to fit any type of window, including uPVC and timber due to its slim fixing plate",
            "Our weighty hinton window handle range is forged from solid brass which emphasises the high quality materials and manufacturing techniques used",
            "Overall Length: 170mm",
            "Handle length: 142mm",
            "Fixing Plate: 69mm x 16mm",
            "Fixing Plate Thickness: 5mm",
            "Centres: 43mm",
            "It can be fitted to any modern espagnolette system and can be locked with a grub screw on the handle",
          ],
        },
        {
          id: "hintonPegstays",
          name: "Hinton Pegstays",
          content: [
            {
              description: "Polished Chrome Hinton Pegstays",
              image:
                "/images/casement_windows/Hinton pegstays/polished chrome.png",
            },
            {
              description: "Aged Brass Hinton Pegstays",
              image: "/images/casement_windows/Hinton pegstays/aged brass.png",
            },
            {
              description: "Aged Bronze Hinton Pegstays",
              image: "/images/casement_windows/Hinton pegstays/aged bronze.png",
            },
            {
              description: "Polished Nickel Hinton Pegstays",
              image:
                "/images/casement_windows/Hinton pegstays/polished nickel.png",
            },
            {
              description: "Polished Brass Hinton Pegstays",
              image:
                "/images/casement_windows/Hinton pegstays/polished brass.png",
            },
          ],
          features: [
            "Our aged bronze finish is matt and rich due to the finishing process we use to age the metal, this process initially darkens the material, however the finish will gradually oxidize over time revealing the warmer copper undertones. This finish has been salt tested to 480 hours",
            "A highly polished finish which reflects like a mirror. A base metal of solid brass with quality chrome plating applied to it's surface which is salt tested to 480 hours",
            "A highly polished finish with a nickel plating applied to solid brass which is salt tested to 480 hours. Similar to a polished chrome finish but with much warmer tones",
            "The unlacquered brass achieves a timeless elegance, highly polished on all surface areas but aged to highlight the detail and design. This will tarnish in time as part of the ageing process but can be polished time and time again if a natural sheen is desired",
            "Hinton window stay is forged from solid bronze which emphasises the high quality materials and manufacturing techniques used",
            "Dimensions:",
            '8": Overall Length: 244mm, Fixing Plate: 45mm x 16mm, Stay Arm 220mm',
            '10": Overall Length: 289mm, Fixing Plate: 45mm x 16mm, Stay Arm 267mm',
            '12": Overall Length: 331mm, Fixing Plate: 45mm x 16mm, Stay Arm 308mm',
          ],
        },
        {
          id: "tiltTurnHandles",
          name: "Tilt & Turn Handles",
          content: [
            {
              description: "Black Tilt/ Turn Handles",
              image: "/images/casement_windows/tilt_turn handle/black.png",
            },
            {
              description: "Stainles Steel Tilt/ Turn Handles",
              image:
                "/images/casement_windows/tilt_turn handle/stainless steel.png",
            },
            {
              description: "Old Gold Tilt/ Turn Handles",
              image: "/images/casement_windows/tilt_turn handle/old gold.png",
            },
            {
              description: "Silver Tilt/ Turn Handles",
              image: "/images/casement_windows/tilt_turn handle/silver.png",
            },
            {
              description: "White Tilt/ Turn Handles",
              image: "/images/casement_windows/tilt_turn handle/white.png",
            },
          ],
          features: [
            "The handle locks in the closed position, locks at 0 degrees, firm hold when 90 or 180 degrees",
            "White & Black finishes are a smooth polyester powder coat (PPC) cast aluminium",
            "Stainless steel, old gold and silver finishes are HARDEX® coated cast zinc",
            "Meets requirements of BSEN1670:2007 Grade 5 (480 hours) Endurance tested to 50,000 cycles",
            "Handle grip and backplate: zinc alloy casting & Nickel plate",
            "Button: Acetal (POM)",
            "Spindle: 30mm +/- 1.25mm",
          ],
        },
        {
          id: "decorativeButtHinges",
          name: "Decorative Butt Hinges",
          content: [
            {
              description: "Chrome Plated Decorative Butt Hinges",
              image:
                "/images/casement_windows/Standard Hinges/Chrome Plated.png",
            },
            {
              description: "Black Decorative Butt Hinges",
              image: "/images/casement_windows/Standard Hinges/Black.png",
            },
            {
              description: "Polished Brass Decorative Butt Hinges",
              image:
                "/images/casement_windows/Standard Hinges/polished brass.png",
            },
          ],
          features: [
            "Hinges are water-resistant and pre-lubricated to prevent squeaking",
            "Crafted with durable steel for enhanced reliability and long-lasting usage, perfect for keeping residential doorways secure",
            "Specifications:",
            "Length: 3.5",
            "Width: 1/8",
            "Height: 3-1/2",
            "Weight: 1.17",
          ],
        },
        {
          id: "regentWindowHandles",
          name: "Regent Window Handles",
          content: [
            {
              description: "Polished Stainless Steel Regent Window Handles",
              image:
                "/images/casement_windows/regent window handles/polished stainless steel.png",
            },
            {
              description: "Polished Brass PVD Regent Window Handles",
              image:
                "/images/casement_windows/regent window handles/polished brass.png",
            },
            {
              description: "Matt Black PVD Regent Window Handles",
              image:
                "/images/casement_windows/regent window handles/Matt Black PVD.png",
            },
            {
              description: "Stainless Steel Regent Window Handles",
              image:
                "/images/casement_windows/regent window handles/stainless steel.png",
            },
            {
              description: "Satin Brass PVD Regent Window Handles",
              image:
                "/images/casement_windows/regent window handles/satin brass.png",
            },
          ],
          features: [
            "A high-quality, elegant window espagnolette handle",
            "This fastener is lockable for added window security and is sprung to help keep the lever in place",
            "They are ideal for use where corrosion levels are high such as in coastal environments and with acidic timber",
            "Manufactured from a base material of 316 marine-grade stainless Steel",
            "Cycle Test: 10,000 Cycles",
            "Overall Length - 99mm",
          ],
        },
        {
          id: "operaWindowHandles",
          name: "Opera Window Handles",
          content: [
            {
              description: "Stainless Steel Opera Window Handles",
              image: "/images/casement_windows/opera/stainless steel.png",
            },
            {
              description: "Matt Black PVD Opera Window Handles",
              image: "/images/casement_windows/opera/Matt Black PVD.png",
            },
            {
              description: "Satin Brass PVD Opera Window Handles",
              image: "/images/casement_windows/opera/satin brass PVD.png",
            },
          ],
          features: [
            "Opera high quality, elegant window espagnolette handle",
            "Lockable for added window security and is sprung to help keep the lever in place",
            "Manufactured from solid 316 Marine Grade Stainless Steel for long lasting durability",
            "Ideal for use where corrosion levels are high such as coastal environments and with acidic timber",
            "PBK black finish has been successfully salt spray tested to 1000 hours, test: ASTM B117-2019",
          ],
        },
        {
          id: "contemporaryWindowsFurniture",
          name: "Contemporary Windows Furniture",
          content: [
            {
              description: "Contemporary Window Fastener",
              image:
                "/images/casement_windows/contemporary/window fastener.png",
            },
            {
              description: "Inline Contemporary Window Fastener",
              image:
                "/images/casement_windows/contemporary/inline fastener.png",
            },
            {
              description: "Contemporary Pegstay",
              image: "/images/casement_windows/contemporary/pegstay.png",
            },
          ],
          features: [
            "High quality satin stainless steel finish",
            "Frelan, locking round bar window casement fastener, right hand",
            "Handle suitable for weather stripped windows (windows with seals)",
            "Face fix, ideal for wooden windows",
            "Handle Length - 120mm",
            "Made from 316 Marine Grade Stainless Steel material",
            "Ideal for environments where corrosion levels are high",
            "High quality, contemporary casement window handle",
            "Supplied with peg and rest",
            "Manufactured from solid 316 Marine Grade Stainless Steel for strength and durability",
            "Ideal for use where corrosion levels are high such as coastal environments and with acidic timber",
          ],
        },
      ],
    },
    images: [
      "https://static.wixstatic.com/media/a43a98_e9468b45841648c0b6e7bd508c574cbc~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_e9468b45841648c0b6e7bd508c574cbc~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_d2856e3388fc47f58e4981f9add53ded~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_d2856e3388fc47f58e4981f9add53ded~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_26717ef12759462294719cf05869e4cd~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_26717ef12759462294719cf05869e4cd~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_51c862833f8341fba53186841f9fdf78~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_51c862833f8341fba53186841f9fdf78~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_60759207d6734705bc3f9612be09cfcf~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_60759207d6734705bc3f9612be09cfcf~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_825949107eee49459fa3aba6c5330a45~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_825949107eee49459fa3aba6c5330a45~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_99a60ced81af4a43a6c30013186c14a4~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_99a60ced81af4a43a6c30013186c14a4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_c8abac6269454577a8d2f90931405af4~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_c8abac6269454577a8d2f90931405af4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_38d89d47860f4bc492a55a9c784f92b3~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_38d89d47860f4bc492a55a9c784f92b3~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_3322ac190bac4c65a9b7c10896c7425f~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_3322ac190bac4c65a9b7c10896c7425f~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_24505ee33a934a418ce3176aa23087b9~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_24505ee33a934a418ce3176aa23087b9~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_f68439e424374587ba115c46b3e2a164~mv2.jpg/v1/fit/w_1600,h_763,q_90/a43a98_f68439e424374587ba115c46b3e2a164~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_cfad9be32d6b47b48694886bcfe58aae~mv2.jpg/v1/fit/w_1600,h_763,q_90/a43a98_cfad9be32d6b47b48694886bcfe58aae~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_a54fdb64e3ab4481bbcbb44487eef81c~mv2.jpg/v1/fit/w_1600,h_763,q_90/a43a98_a54fdb64e3ab4481bbcbb44487eef81c~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_05ffad5f4dc54d618eef4f4bec74c482~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_05ffad5f4dc54d618eef4f4bec74c482~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_9b984893919a4727b839e68cbbb3b10b~mv2.jpg/v1/fit/w_1600,h_763,q_90/a43a98_9b984893919a4727b839e68cbbb3b10b~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_2e3ea63c3d924b53af9884408973ff34~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_2e3ea63c3d924b53af9884408973ff34~mv2.webp",
    ],
    object:
      "https://sketchfab.com/models/c60231e485644b1b8cf59fbc50dc1086/embed?autospin=1&ui_theme=dark",
  },
  {
    id: "french-doors",
    title: "French Doors",
    description:
      "Elevate Your Space with Beautiful French Doors. Transform your home with our stunning patio doors, designed to blend indoor comfort with outdoor elegance. Our French doors offer expansive views, easy access to your outdoor spaces, and seamless integration with your décor. Crafted for durability and smooth operation, they enhance natural light and improve energy efficiency. Upgrade to our premium patio doors and enjoy a brighter, more inviting living area today!",
    table: {
      parts: [
        {
          id: "woodenFrenchDoors",
          name: "Wooden French Doors",
          content: [
            {
              description: "Polished Chrome Solid Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/slch_1.jpg",
            },
            {
              description: "Lacquered Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2023/04/SLLB_MIGHTON_117-1024x1024.jpg",
            },
            {
              description: "Satin Chrome Brass Sash Lifts",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/slsc_3.jpg",
            },
          ],
          features: [
            "Sash lifts act as handles to raise the sash",
            "They are traditionally fitted to the bottom sash",
            "Sash lifts are suitable for interior use only",
            "Our premium sash lifts are all made from solid brass",
            "Overall height 45mm, projection 33mm",
            "Mounting plate size 50mm x 17mm",
            "Available in a range of finishes",
            "Our lacquered brass sash lifts have lacquered to help prevent tarnishing since  helps reduce tarnishing",
          ],
        },
        {
          id: "hinges",
          name: "Hinges",
          content: [
            {
              description: "Chrome Plated Decorative Butt Hinges",
              image:
                "/images/casement_windows/Standard Hinges/Chrome Plated.png",
            },
            {
              description: "Black Decorative Butt Hinges",
              image: "/images/casement_windows/Standard Hinges/Black.png",
            },
            {
              description: "Polished Brass Decorative Butt Hinges",
              image:
                "/images/casement_windows/Standard Hinges/polished brass.png",
            },
          ],
          features: [
            "Hinges are water-resistant and pre-lubricated to prevent squeaking",
            "Crafted with durable steel for enhanced reliability and long-lasting usage, perfect for keeping residential doorways secure",
            "Specifications:",
            "Length: 3.5",
            "Width: 1/8",
            "Height: 3-1/2",
            "Weight: 1.17",
          ],
        },
        {
          id: "handles",
          name: "Handles",
          content: [
            {
              description: "Value Dee Handle Polished Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deechz_1.jpg",
            },
            {
              description: "Value Dee Handle PVD Brass",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deepvdz_1.jpg",
            },
            {
              description: "Value Dee Handle Satin Chrome",
              image:
                "https://www.mightonproducts.com/wp-content/uploads/2022/09/deescz_1.jpg",
            },
          ],
          features: [
            "Usually fitted to the top sash",
            "Used to raise and lower the sash",
            "Two are usually fitted, one on each side of the sash",
            "Available in a range of finishes",
            "10W x 130L x 20H (mm)",
          ],
        },
        {
          id: "glass",
          name: "Glass",
          content: [
            {
              description: "Single Glazed Glass",
              image:
                "https://anlin.com/wp-content/uploads/2020/11/single-pane.jpg",
            },
            {
              description: "Double Glazed Glass",
              image:
                "https://www.velux.co.nz/products/-/media/marketing/au/images/116153%2001_glazing_transp.png?h=255&iar=0&mh=255&mw=255&w=255&key=-62135596800",
            },
            {
              description: "Frosted Glass",
              image:
                "https://www.neuffer.de/sites/de/files/img/options/l/ornamental-glass.jpg",
            },
            {
              description: "Stain Glass",
              image:
                "https://www.leadbitterglass.co.uk/wp-content/uploads/2020/05/1930s-stained-glass-door-panel.jpg",
            },
          ],
          features: [
            "With a powder coated finish, these windows are designed to be tough and durable in all environments.",
            "Single Glazed Skylight can be fitted to any thickness of roof material",
            "Single Glazed Skylight can be fitted to any design of building including cabins, workshops, summerhouses, offices, potting sheds, garages, beach huts and sheds.",
            "24mm in depth",
            "4mm panes of glass",
            "Panes of glass on the inside and outside.",
            "Radiant heat block: complete window approx 80% glass only approx 75%",
            "UV Harmful rays block: 99%",
            "Noise reduction factor: 32 decibels",
            "Double layer of Low-E3 coating.",
            "10 year warranty on insulated glass seal.",
            "Reduced cleaning frequency",
            "Easy to Clean",
            "Filters and Regulates Light",
            "Frosted Glass is Versatile",
            "Since it is not entirely transparent, it adds a unique touch of style to your space",
            "Offers Increased Privacy",
            "Does Not Break Easily",
            "Considered an art of painting",
            "If looked after well, you can expect a Stained Glass Window to last as long as any other window in your home.",
            "Typically approximately 1.6 mm to 3.2 mm per pane. Custom thicknesses can be used depending on the design and structural requirements.",
            "Individual pieces of colored or textured glass arranged in a pattern, with each pane being unique in color and texture.",
            "Stained glass blocks a significant portion of UV rays, but exact percentages can vary based on the type of glass and any additional coatings or treatments.",
            "Generally, it can block around 80-90% of UV rays.",
            "Each stained glass piece is often custom-designed, which means specifications can vary widely based on the artist’s design and the project’s requirements.",
          ],
        },
      ],
    },
    images: [
      "https://static.wixstatic.com/media/a43a98_084138f7af924e30a05d147060d4413a~mv2_d_1200_1600_s_2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_084138f7af924e30a05d147060d4413a~mv2_d_1200_1600_s_2.webp",
      "https://static.wixstatic.com/media/a43a98_24e7c1d4cae84a7b86df1689fcc375ee~mv2.jpg/v1/fit/w_540,h_720,q_90/a43a98_24e7c1d4cae84a7b86df1689fcc375ee~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_5d92b9d079604b4d9dda999a776c9076~mv2.jpg/v1/fit/w_720,h_763,q_90/a43a98_5d92b9d079604b4d9dda999a776c9076~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_65d33cb0fa1b4db0838468d4d6fd9442~mv2.jpg/v1/fit/w_720,h_763,q_90/a43a98_65d33cb0fa1b4db0838468d4d6fd9442~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_45d2014306e94da0906d922027f3e70d~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_45d2014306e94da0906d922027f3e70d~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_ebb4d7a728b84a11aa6237a9a912e469~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_ebb4d7a728b84a11aa6237a9a912e469~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_ae5f0ba5c41c4f209f975dffc1ee6481~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_ae5f0ba5c41c4f209f975dffc1ee6481~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_8fa8e75ba97241e3897716fb274aaa7b~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_8fa8e75ba97241e3897716fb274aaa7b~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_96a31f3b93c44852843b34d716e8e27f~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_96a31f3b93c44852843b34d716e8e27f~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_186f5b0080b44c46a6386dd7261c3ad4~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_186f5b0080b44c46a6386dd7261c3ad4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_7d0253e9dcb84bc99f7f26dc8d04fa8a~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_7d0253e9dcb84bc99f7f26dc8d04fa8a~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_3689389b4e154588992fe01daf9b16d4~mv2.jpg/v1/fit/w_720,h_763,q_90/a43a98_3689389b4e154588992fe01daf9b16d4~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_434dc94bc9be4708bcaff19db73f5e61~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_434dc94bc9be4708bcaff19db73f5e61~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_5ed9e73808254b0f9a4a81fe0801577c~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_5ed9e73808254b0f9a4a81fe0801577c~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_de56466428f8448fac3df6a4469684b1~mv2.jpg/v1/fit/w_1600,h_763,q_90/a43a98_de56466428f8448fac3df6a4469684b1~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_a441fc33fcbe428b93e8990db05b2117~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_a441fc33fcbe428b93e8990db05b2117~mv2.webp",
    ],
    object:
      "https://sketchfab.com/models/f1140eda513b49ffa027ba0a6f73d0f0/embed?autospin=1&ui_theme=dark",
  },
  {
    id: "skylights",
    title: "Skylights",
    description:
      "Brighten Your Space with Premium Skylights. Transform any room with our top-quality skylights, designed to flood your space with natural light and enhance its beauty. Our skylights are available in various styles and sizes, offering both elegance and energy efficiency. Enjoy unobstructed views and a brighter, more inviting environment with our durable and stylish skylights. Elevate your space today!",
    table: {
      parts: [
        {
          id: "singleGlazedGlassSkylights",
          name: "Single Glazed Glass Skylights",
          content: [
            {
              description: "Single Glazed Skylight",
              image:
                "https://anlin.com/wp-content/uploads/2020/11/single-pane.jpg",
            },
          ],
          features: [
            "With a powder coated finish, these windows are designed to be tough and durable in all environments.",
            "Single Glazed Skylight can be fitted to any thickness of roof material",
            "Single Glazed Skylight can be fitted to any design of building including cabins, workshops, summerhouses, offices, potting sheds, garages, beach huts and sheds.",
          ],
        },
        {
          id: "doubleGlazedGlassSkylights",
          name: "Double Glazed Glass Skylights",
          content: [
            {
              description: "Double Glazed Skylight",
              image:
                "https://www.velux.co.nz/products/-/media/marketing/au/images/116153%2001_glazing_transp.png?h=255&iar=0&mh=255&mw=255&w=255&key=-62135596800",
            },
          ],
          features: [
            "24mm in depth",
            "4mm panes of glass",
            "Panes of glass on the inside and outside.",
            "Radiant heat block: complete window approx 80% glass only approx 75%",
            "UV Harmful rays block: 99%",
            "Noise reduction factor: 32 decibels",
            "Double layer of Low-E3 coating.",
            "10 year warranty on insulated glass seal.",
            "Reduced cleaning frequency",
          ],
        },
        {
          id: "frostedGlassSkylights",
          name: "Frosted Glass Skylights",
          content: [
            {
              description: "Frosted Glass Skylight",
              image:
                "https://www.neuffer.de/sites/de/files/img/options/l/ornamental-glass.jpg",
            },
          ],
          features: [
            "Easy to Clean",
            "Filters and Regulates Light",
            "Frosted Glass is Versatile",
            "Since it is not entirely transparent, it adds a unique touch of style to your space",
            "Offers Increased Privacy",
            "Does Not Break Easily",
          ],
        },
        {
          id: "stainGlassSkylights",
          name: "Stain Glass Skylights",
          content: [
            {
              description: "Stain Glass Skylight",
              image:
                "https://www.leadbitterglass.co.uk/wp-content/uploads/2020/05/1930s-stained-glass-door-panel.jpg",
            },
          ],
          features: [
            "Considered an art of painting",
            "If looked after well, you can expect a Stained Glass Window to last as long as any other window in your home.",
            "Typically approximately 1.6 mm to 3.2 mm per pane. Custom thicknesses can be used depending on the design and structural requirements.",
            "Individual pieces of colored or textured glass arranged in a pattern, with each pane being unique in color and texture.",
            "Stained glass blocks a significant portion of UV rays, but exact percentages can vary based on the type of glass and any additional coatings or treatments.",
            "Generally, it can block around 80-90% of UV rays.",
            "Each stained glass piece is often custom-designed, which means specifications can vary widely based on the artist’s design and the project’s requirements.",
          ],
        },
      ],
    },
    images: [
      "https://static.wixstatic.com/media/a43a98_6df99720322c4f86b94895055f188c9a~mv2.jpg/v1/fit/w_1200,h_763,q_90/a43a98_6df99720322c4f86b94895055f188c9a~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_79cb923359d941e9ae21cf47a1989381~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_79cb923359d941e9ae21cf47a1989381~mv2.webp",
      "https://static.wixstatic.com/media/a43a98_23ba2a9760b3482197972f767f62bd53~mv2.jpg/v1/fit/w_1740,h_763,q_90/a43a98_23ba2a9760b3482197972f767f62bd53~mv2.webp",
    ],
    object:
      "https://sketchfab.com/models/369ba86806d844aca7ff9208efeb5fc3/embed?autospin=1&ui_theme=dark",
  },
];

export { services, data };

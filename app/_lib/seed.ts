import { db } from "../_lib/prisma";

async function main() {
  await db.trip.createMany({
    data: [
      {
        name: "Aurora Hotel",
        description:
          "Hotel Aurora is a charming retreat nestled amidst the majestic mountains. With its lush gardens and elegant architecture, Aurora offers spacious, beautifully decorated rooms, award-winning cuisine, a luxurious spa and a range of leisure facilities. It is the perfect place for travelers seeking a relaxing and rejuvenating getaway, providing a memorable experience in a stunning setting.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Amalfi, Italy",
        countryCode: "IT",
        coverImage:
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 250,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Palace Hotel",
        description:
          "The Hotel Palace is a jewel of hospitality, a symbol of luxury and elegance. Located in a privileged location, the hotel offers guests a truly magnificent experience. With stunning rooms, sophisticated decor and stunning panoramic views, the Palace captivates its visitors from the moment they enter. Impeccable services and attention to detail guarantee an unforgettable stay, while exquisite restaurants and elegant bars satisfy the most discerning palates. With a wide range of leisure facilities including a spa, gym and stunning swimming pools, Hotel Palace offers an unrivaled luxury experience for those seeking the pinnacle of hospitality and comfort.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "New York, United States",
        countryCode: "US",
        coverImage:
          "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 350,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Oasis Royal",
        description:
          "Royal Oasis is an exclusive luxury hotel that combines imposing architecture, refined decor and high-quality services to provide its guests with an unparalleled experience. With spacious rooms, gourmet restaurants, wellness facilities and impeccable service, this haven of tranquility and elegance is the perfect place for those seeking the best in comfort and sophistication.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Florença, Italy",
        countryCode: "IT",
        coverImage:
          "https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1538683270504-3d09ad7ae739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Azure Haven Retreat",
        description:
          "Azure Haven Retreat is a luxurious oasis located on a private island where crystal clear ocean waters meet pristine white sand beaches. With contemporary and elegant architecture, this exclusive hotel offers its guests a peaceful and sophisticated getaway experience. Spacious, meticulously decorated rooms and suites provide a serene environment, while world-class restaurants offer exquisite cuisine featuring fresh ingredients and international flavors. Additionally, Azure Haven Retreat offers a variety of leisure activities such as diving, yachting and relaxation in a luxury spa, ensuring an unforgettable experience of seaside luxury.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Lago Sereno, Switzerland",
        countryCode: "CH",
        coverImage:
          "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1528215747454-3d0e0902fff2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 600,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: true,
        maxGuests: 5,
      },
      {
        name: "Palazzo Sereno",
        description:
          "Palazzo Sereno is a luxury hotel located in a historic European city. With stunning architecture and an elegant ambience, the hotel offers guests an exclusive experience of comfort and sophistication. The exquisitely decorated rooms provide a peaceful retreat, while the high-quality services guarantee an unforgettable stay. With a privileged location, Palazzo Sereno allows guests to explore the city's beauty and experience local culture with ease. A stay at this hotel is a true experience of luxury and refinement.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Madrid, Spain",
        countryCode: "ES",
        coverImage:
          "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 400,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Mountain Peak Lodge",
        description:
          "Mountain Haven Retreat is a luxury boutique hotel located in a serene mountain region surrounded by stunning scenery and tranquility. With elegantly decorated rooms, the hotel offers guests a comfortable and relaxing stay amidst untouched nature. Guests can enjoy gourmet meals prepared with fresh, local ingredients at the hotel's restaurant, whilst taking in stunning mountain views. With access to hiking trails, outdoor activities and a relaxing spa, Mountain Haven Retreat provides guests with a luxurious experience in an enchanting, natural retreat.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Montreal, Canada",
        countryCode: "CA",
        coverImage:
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 700,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Encanto da Serra",
        description:
          "Encanto da Serra is a charming guesthouse located in a small coastal town, on the southern coast of Brazil. With a welcoming and familiar atmosphere, the guesthouse offers guests a peaceful and relaxing stay. The rooms are comfortable and well decorated, providing a cozy retreat. Guests can enjoy a delicious breakfast, with homemade and regional options, which is served with care. Furthermore, Recanto Sereno is a short walk from the beach, allowing guests to enjoy moments of rest and leisure by the sea. With attentive and friendly staff, Recanto Sereno provides guests with a relaxing and memorable stay in a serene environment on the coast of Brazil.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Bahia, Brazil",
        countryCode: "BRA",
        coverImage:
          "https://images.unsplash.com/photo-1610530531783-56a4e92a3305?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1519552928909-67ca7aef9265?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
          "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 300,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Rancho Sereno",
        description:
          "Rancho Sereno is a charming farm set in a peaceful rural region. With simple and welcoming accommodations, the ranch offers visitors an authentic experience of country life. Guests can enjoy moments of peace and tranquility amidst lush nature, taking advantage of hiking trails, horse riding and outdoor activities.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Amsterdam, Netherlands",
        countryCode: "NL",
        coverImage:
          "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1596753365498-2d23bbfcbc24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1512237798647-84b57b22b517?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1509826069158-41fafc8a4a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1534&q=80",
        ],
        pricePerDay: 100,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: false,
        maxGuests: 5,
      },
      {
        name: "Serenity Cottage",
        description:
          "Chalet Serenidade is a charming retreat set in a picturesque mountainous area. With its charming architecture and welcoming atmosphere, the chalet offers guests a peaceful and relaxing stay. The rooms are cozy and well decorated, providing a pleasant environment to rest and enjoy the beauty of the surrounding nature. Guests can enjoy peaceful moments in front of the fireplace or explore nearby trails. With its secluded location, Chalé Serenidade is perfect for those seeking a serene and welcoming mountain escape.",
        startDate: new Date("2023-07-03"),
        endDate: new Date("2023-07-30"),
        location: "Paris, French",
        countryCode: "FR",
        coverImage:
          "https://images.unsplash.com/photo-1515496281361-241a540151a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
        imageUrl: [
          "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1545158535-c3f7168c28b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
          "https://images.unsplash.com/photo-1614267157481-ca2b81ac6fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        ],
        pricePerDay: 200,
        highlights: [
          "Breakfast included",
          "Pool",
          "Free WiFi",
          "Free parking",
          "Paradisiacal view",
          "Luxurious",
        ],
        recommended: false,
        maxGuests: 5,
      },
    ],
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });

const carData = [
  {
    id:1,
    bookName: "The Chronicles of Narnia",
    imgUrl: "https://images.unsplash.com/photo-1629992101753-56d196c8aabb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author:"C.S. Lewis",
    description:
      "The Chronicles of Narnia have enchanted millions of readers over the last fifty years, and the magical events described in C. S. Lewis's immortal prose have left many a lasting memory. For here is a world where a witch decrees eternal winter; where there are more talking animals than people; and where battles are fought by Centaurs, Giants, and Fauns. Now all seven Chronicles are bound together in this one magnificent volume with a personal introduction by Douglas Gresham, stepson of C. S. Lewis. Pauline Baynes' original and much-loved illustrations have been made even more memorable by the addition of colour. This spectacular gift edition will guarantee that C. S. Lewis's timeless world of Narnia will catch the imagination of yet another generation of readers.",
    genre:"Fiction",
    publish_date:"October 13, 2014",
  },

  {
    id: 2,
    bookName: "Company of One",
    imgUrl:"https://images.unsplash.com/photo-1641154748135-8032a61a3f80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author:"Paul Jarvis",
    description:
      "What if the real key to a more fulfilling career was not to scale up but to work for yourself and become a successful and sustainable company of one? The New York Times bestselling author of Deep Work Cal Newport calls this book a “must-read for any entrepreneur who prioritizes a rich life over riches.” Company of One offers a refreshingly original business strategy that’s focused on a commitment to being better instead of bigger. Why? Because staying small provides one with the freedom to pursue more meaningful pleasures in life―and avoid the headaches that come with traditional growth-oriented business. Having personally discovered the benefits of cutting out the corporate hierarchy that constantly demands more, author Paul Jarvis explains how you can do the same. With this groundbreaking guide, you’ll learn how to set up your shop, determine your desired revenues, deal with unexpected crises, keep your key clients happy, and find self-fulfillment every step of the way.",
    genre:"Fiction",
    publish_date:"October 13, 2015",
  },

  {
    id: 3,
    bookName: "The Two Towers",
    imgUrl: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Ym9vayUyMGNvdmVyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    author:"J.R.R.Tolkien",
    genre:"Fiction",
    publish_date:"July 13, 2014",
    description:
      "Continuing the story of The Hobbit, this is the second part of Tolkien's epic masterpiece, The Lord of the Rings. Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the ruling ring from falling into the hands of the Dark Lord by destroying it in the cracks of doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs. Now they continue their journey alone down the great River Anduin alone, that is, save for the mysterious creeping figure that follows wherever they go.",
  },
  {
    id: 4,
    bookName: "Milk and Honey",
    imgUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author:"Rupi Kaur",
    genre:"Fiction",
    publish_date:"October 10, 2006",
    description:
      "When she was five, her mother handed her a paintbrush and said, “draw your heart out.” Rupi Kaur views her life as an exploration of that artistic journey. Through her poetry and illustrations, she engages with love, loss, trauma, healing and femininity. For Rupi, writing has always been a collective experience. At the age of seventeen she began sharing her work. The stage was her first love and spoken word is where she found her voice. Rupi pursued her love for language by studying rhetoric at the University of Waterloo. She began working on her first collection milk and honey, which eventually became a New York Times bestseller. Rupi’s passion is expression. For her that expression takes many forms. Her photography and art direction are brought to various spaces around the world and her poetry and prose are breaking international boundaries.",
  },

  {
    id: 5,
    bookName: "The Psychology of Money",
    imgUrl: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author:"Morgan Housel",
    genre:"Fiction",
    publish_date:"January 05, 2006",
    description:
      "Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. And behavior is hard to teach, even to really smart people. How to manage money, invest it, and make business decisions are typically considered to involve a lot of mathematical calculations, where data and formulae tell us exactly what to do. But in the real world, people don?t make financial decisions on a spreadsheet. They make them at the dinner table, or in a meeting room, where personal history, your unique view of the world, ego, pride, marketing, and odd incentives are scrambled together. In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.",
  },

  {
    id: 6,
    bookName: "A Court of Mist and Fury",
    imgUrl: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author:"Sarah J.Maas",
    genre:"Fiction",
    publish_date:"October 19, 2020",
    description:
      "Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.As her marriage to Tamlin approaches, Feyre's hollowness and nightmares consume her. She finds herself split into two different one who upholds her bargain with Rhysand, High Lord of the feared Night Court, and one who lives out her life in the Spring Court with Tamlin. While Feyre navigates a dark web of politics, passion, and dazzling power, a greater evil looms. She might just be the key to stopping it, but only if she can harness her harrowing gifts, heal her fractured soul, and decide how she wishes to shape her future-and the future of a world in turmoil.",
  },

  {
    id: 7,
    bookName: "Vampyres",
    imgUrl: "https://images.unsplash.com/photo-1603162590176-7418e6b00ea4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    author:"Christopher Frayling",
    genre:"Fiction",
    publish_date:"December 23, 2014",
    description:
      "Christopher Frayling has spent 45 years exploring the history of one of the most enduring figures in the history of mass culture - the vampire. Vampyres is a comprehensive and generously illustrated history and anthology of vampires in literature, from the folklore of Eastern Europe to the Romantics and beyond. Frayling recounts the most significant moments in gothic history, while extracts from a huge range of sources - including Bram Stoker's detailed research notes for Dracula, penny dreadfuls and Angela Carter's The Bloody Chamber , new to this edition - are contextualized and analysed. This revised and expanded edition brings Vampyres up to date with 21st-century vampire literature, including new text extracts, commentary and a revised introduction. For the first time, Christopher Frayling also explores the development of the vampire in the visual arts in four colour-plate sections, with illustrations ranging from 18th-century prints to 21st-century film stills, demonstrating the enduring appeal of the vampire from popular press to fine art and, finally, to film.",
  },

  {
    id: 8,
    bookName: "Harry Potter",
    imgUrl: "https://images.unsplash.com/photo-1618666012174-83b441c0bc76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJvb2slMjBjb3ZlcnxlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
    author:"J.K.Rowling",
    genre:"Fiction",
    publish_date:"March 13, 2014",
    description:
      "Escape to Hogwarts with the unmissable series that has sparked a lifelong reading journey for children and families all over the world. The magic starts here.Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his grisly aunt and uncle. Then, on Harry's eleventh birthday, a great beetle-eyed giant of a man called Rubeus Hagrid bursts in with some astonishing news: Harry Potter is a wizard, and he has a place at Hogwarts School of Witchcraft and Wizardry. The magic starts here!These editions of the classic and internationally bestselling Harry Potter series feature thrilling jacket artwork by award-winning illustrator Jonny Duddle. They are the perfect starting point for anyone who's ready to lose themselves in the greatest children's story of all time.",
  },
  {
    id: 9,
    bookName: "The Adventures of Huckleberry Finn",
    imgUrl:"https://m.media-amazon.com/images/I/61nwLbDFRLL.jpg",
    author:"Mark Twain",
    genre:"Non-Fiction",
    publish_date:"July 20, 2014",
    description:
      "One of the most beloved books of all time, The Adventures of Huckleberry Finn is a stark critique of institutionalised racism during the pre-civil war days. Amongst the top famous books and authors you must read, the story traces the journey of a Mississippi boy travelling down the river with a runaway slave and came across various adventures meeting a fighting family, some people posing as royals and many other confusions that make it a fun rollercoaster to jump on!",
  },

  {
    id:10,
    bookName: "Anna Karenina",
    imgUrl:"https://m.media-amazon.com/images/M/MV5BMTU0NDgxNDg0NV5BMl5BanBnXkFtZTcwMjE4MzkwOA@@._V1_FMjpg_UX1000_.jpg",
    author:"Leo Tolstoy",
    genre:"Non-Fiction",
    publish_date:"October 10, 2010",
    description:
      "Revered among the great personalities of all time, the Russian born Leo Tolstoy is known for writing masterpieces that are unmatched even centuries after. The book originally written in the Russian language has been translated into English. Spread over 800 pages, the novel has more than five main characters. In the list of famous books and authors, Leo Tolstoy and his book are perhaps on top of the list. The story having a complex plot with diverse themes through the life of a family explores the social condition of Russia in the 19th century. In the backdrop of a story, Tolstoy successfully manages to portray a picture of Russian society. What he considers his first real book is lauded by many writers as the greatest work in literature.",
  },

  {
    id: 11,
    bookName: "The Great Gatsby",
    imgUrl:"https://cloud.firebrandtech.com/api/v2/img/111/9780785839996/XL",
    author:"F. Scott Fitzgerald",
    genre:"Fiction",
    publish_date:"September 13, 2015",
    description:
      "A landmark work by F.Scott Fitzgerald, The Great Gatsby is considered amongst the greatest novels ever written! It tells the story of a wealthy man, Jay Gatsby, who plans to woo Daisy, an old lost love, by befriending her cousin. Considered amongst the famous authors and novels of all time, The Great Gatsby follows its protagonist Jay Gatsby’s story who comes from nothing but with perseverance and luck, makes it big only to lose it all to the hands of love.",
  },

  {
    id: 12,
    bookName: "1984",
    imgUrl:"https://w0.peakpx.com/wallpaper/642/879/HD-wallpaper-1984-book-orwell.jpg",
    author:"George Orwell ",
    genre:"Fiction",
    publish_date:"December 05,2006",
    description:
      "For obvious reasons, the masterpiece by 20th century’s most influential writer is a dystopian novel criticizing the authoritarian regime in Oceania. The story revolves around the main character, Winston Smith, whose stance against the regime is moulded into compliance through incessant efforts at breaking him down by the ‘Thought Police’. The book was banned for a long time until it came to be known as the greatest works in the political writing of the 21st century.  Considered among the greatest writers of all time, George Orwell is known for turning political writing into an art. Orwell’s allegoric novel ‘Animal Farm’ is equally important. If you are looking for famous books and authors, then you should consider giving Orwell a read. ",
  },
  {
    id: 13,
    bookName: "Brave New World",
    imgUrl:"https://m.media-amazon.com/images/I/81zE42gT3xL.jpg",
    author:"Aldous Huxley",
    genre:"Fiction",
    publish_date:"August 10, 2016",
    description:
      "Written between the two World Wars, the novel is an important read in dystopian literature. After the world war, society began to become dependent on technology as a remedy to solve problems emerging from wars. Aldous Huxley, through chilling use of metaphors, draws a vivid sketch of the futuristic dystopian society where technological surveillance is run at such a scale that even embryos are not left unaffected. The book marked the beginning of the dystopian literature in English society, followed by more such books by Orwell and Margaret Atwood. ",
  },

  {
    id:14,
    bookName: "Madame Bovary",
    imgUrl:"https://m.media-amazon.com/images/I/61j9UN9VnmL.jpg",
    author:"Gustave Flaubert",
    genre:"Fiction",
    publish_date:"March 10, 2005",
    description:
      "While exploring famous books and authors, Madame Bovary’s bold approach to telling a story makes it to the list. The story revolves around the character Charles Bovary and Emma which takes a turn after Emma, who is driven by sensuousness gets disillusioned by her marriage. The book was accused of spreading immorality and was banned for a long time. Exploring the themes like sexuality, love, deceit and tragedy, the debut novel by Gustave Flaubert is counted among the best books of all time. ",
  },

  {
    id:15,
    bookName: "One Hundred Years of Solitude",
    imgUrl:"https://m.media-amazon.com/images/I/81MI6+TpYkL.jpg",
    author:"Gabriel Garcia Marquez",
    genre:"Fiction",
    publish_date:"June 13, 2014",
    description:
      "Amongst the most famous books and authors of Latin American literature, Gabriel Garcia Marquez’s One Hundred Years of Solitude traces the story of the Buendia Family, and explores a wide range of themes from solitude to the need for love. It is considered as the most renowned work in Magical Realism and is a masterpiece of narratives as it follows a family through varied generations with its members doing the same mistakes and explores the tale of a village from its beginning till the end.",
  },

  {
    id:16,
    bookName: "The Feast of the Goat",
    imgUrl:"https://m.media-amazon.com/images/I/517pVb0MsOL._SX316_BO1,204,203,200_.jpg",
    author:"Mario Vargas Llosa",
    genre:"Fiction",
    publish_date:"February 27,2000",
    description:
      "Llosas creative genius is evident in the book that is skilfully woven to represent the great art of storytelling. Originally written in Spanish, Feast of Goat is a historical fiction depicting the last days of Rafael Trujillos dictatorship over the Dominican Republic. The writer while experimenting with story writing techniques tells the story of real experiences through fictional characters with shifting points of view. Literary critics are of opinion that the book has dethroned One Hundred Years of Solitude written by Gabriel Garcia Marquez as the greatest novel from Latin America.",
  },
  {
    id:17,
    bookName: "Think again",
    imgUrl:"https://m.media-amazon.com/images/I/71Igxu7V6mL._AC_UY327_FMwebp_QL65_.jpg",
    author:"Adam Grant",
    genre:"Fiction",
    publish_date:"October 10, 2007",
    description:
      "Intelligence is usually seen as the ability to think and learn, but in a rapidly changing world it might matter more that we can rethink and unlearn.Organizational psychologist Adam Grant is an expert on opening other people's minds-and our own. As Wharton's top-rated professor and the bestselling author of Originals and Give and Take, he tries to argue like he's right but listen like he's wrong.Think Again invites us to let go of views that are no longer serving us well and prize mental flexibility, humility, and curiosity over foolish consistency. If knowledge is power, knowing what we don't know is wisdom.",
  },
  {
    id:18,
    bookName: "The Power of your subconscious mind",
    imgUrl:"https://m.media-amazon.com/images/I/61t9lzF7NtL._AC_UL640_QL65_.jpg",
    author:"Joseph Murphy",
    genre:"Fiction",
    publish_date:"July 23, 2004",
    description:
      "The Power of Your Subconscious Mind is one of the most promising self improvement books that you can gift to yourself or your loved ones. This book is designed to help you improve your relationships, health, and also to give you an internal strength that makes every hurdle look small. The book brings together best of both the worlds – scientific research as well as spiritual wisdom. It used the combined ideas to explain how our subconscious mind has the power to change our lives. The book explains how by understanding and learning to control our subconscious mind, we can welcome a world of prosperity, happiness and success. This book will act as a guide and help you understand the depth of your subconscious, get rid of fears and attract what you desire simply by changing your beliefs. Having sold millions of copies, this book and its ideas have changed the lives of many all over the world.",
  },
  {
    id:19,
    bookName: "Atomic Habits",
    imgUrl:"https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UL480_QL65_.jpg",
    author:"James clear",
    genre:"Fiction",
    publish_date:"March 19, 2014",
    description:
      "Transform your life with tiny changes in behaviour, starting now.People think that when you want to change your life, you need to think big. But world-renowned habits expert James Clear has discovered another way. He knows that real change comes from the compound effect of hundreds of small decisions: doing two push-ups a day, waking up five minutes early, or holding a single short phone call.He calls them atomic habits.In this ground-breaking book, Clears reveals exactly how these minuscule changes can grow into such life-altering outcomes. He uncovers a handful of simple life hacks (the forgotten art of Habit Stacking, the unexpected power of the Two Minute Rule, or the trick to entering the Goldilocks Zone), and delves into cutting-edge psychology and neuroscience to explain why they matter. Along the way, he tells inspiring stories of Olympic gold medalists, leading CEOs, and distinguished scientists who have used the science of tiny habits to stay productive, motivated, and happy.",
  },
  {
    id:20,
    bookName: "Man's Search for Meaning",
    imgUrl:"https://m.media-amazon.com/images/I/61nTspM+BYL._AC_UL480_QL65_.jpg",
    author:"victor E.Frankl",
    genre:"Fiction",
    publish_date:"April 30, 2007",
    description:
      "Only those who allowed their inner hold on their moral and spiritual selves to subside eventually fell victim to the camp's degenerating influence - while those who made a victory of those experiences turned them into an inner triumph.",
  },
  {
    id:21,
    bookName: "The Monk Who Sold His Ferrari",
    imgUrl:"https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UL480_QL65_.jpg",
    author:"Robin Sharma",
    genre:"Non-Fiction",
    publish_date:"May 13, 2004",
    description:
      "A renowned inspirational fiction, The Monk Who Sold His Ferrari is a revealing story that offers the readers a simple yet profound way to live life. The plot of this story revolves around Julian Mantle, a lawyer who has made his fortune and name in the profession. A sudden heart-attack creates havoc in the successful lawyer?s life. Jolted by the sudden onset of the illness, his practice comes to a standstill. He ponders over material success being worth it all, renounces all of it and leaves for India. A visit to India about a spiritual awakening that opens up new vistas and Julian begins to view life in a different perspective. He decides to live his life once again but in a way that is much more fulfilling and meaningful than before. In the book, the reader goes through a spiritual journey and into a very old culture that has gathered much wisdom over the millennia. The book advocates about how to live happily, think deep and rightly, value time and relationships, be more disciplined, follow the heart?s call and live every moment of the life. Written in simple words, the book has turned out to be a bestseller and is more than just an endearing story. Through storytelling, Robin Sharma showcases the miracles and wonders of living a fulfilling life. In the process, the book introduces readers to enlightening yet simple principles that vouch to make life better, happier and more meaningful. A bestselling novel, what readers all over the globe appreciate about this book is its deft amalgam of the philosophies from both western and eastern worlds. The book has been followed by important personalities around the world. About the Author Robin Sharma, the bestselling author of 'The Monk Who Sold His Ferrari', first published in 1999, is an International Leadership Professional Guru who is credited with having written 15 books on leadership. He has been guiding people to live a better life, by drawing inspiration from his own life experiences. The Leader Who Had No Title, The Leader Who Had No Title, The Greatness Guide and The Saint and The Saint are among his best books. He heads the Sharma Leadership International Inc, a firm that trains people in leadership. A former litigation lawyer, Robin holds a law degree from Dalhousie Law School, Canada. This book along with The Greatness Guide has been among the world?s bestsellers and has been translated in as many as 70 languages all over the world.",
  },
  {
    id:22,
    bookName: "The Midnight Library",
    imgUrl:"https://m.media-amazon.com/images/I/51n4BlaMF-L._AC_UL480_QL65_.jpg",
    author:"Matt Haig",
    genre:"Non-Fiction",
    publish_date:"May 26, 2015",
    description:
      "Between life and death there is a library. When Nora seed finds herself in the midnight library, she has a chance to make things right. Up until now, her life has been full of misery and regret. She feels she has let everyone down, including herself. But things are about to change. The books in the midnight library enable Nora to live as if she had done things differently. With the help of an old friend, she can now undo every one of her regrets as she tries to work out her perfect life. But things aren?t always what she imagined they?d be, and soon her choices place the library and herself in extreme danger. Before time runs out, she must answer the ultimate question: What is the best way to live?.",
  },
  {
    id:23,
    bookName: "The Time Machine",
    imgUrl:"https://m.media-amazon.com/images/I/71+n2VSAiXS._AC_UL480_QL65_.jpg",
    author:"H.G.Wells",
    genre:"Non-Fiction",
    publish_date:"October 03, 2014",
    description:
      "A compelling science fiction, the Time Machine is a first-hand account of a Time Traveler's journey into the future. a pull of the lever and the machine sends him to the year 802,701, when humanity has split into two bizarre races?the ethereal Eloi and the subterranean Morlocks. Here, his machine is stolen and with the help of Weena, an Eloi he saved from drowning, the traveler is able to retrieve it. Whizzing thirty million years further into the future, he finds a slowly dying earth, where the bloated red sun sits motionless in the sky and the only sign of life is a black blob with tentacles.He returns to the Victorian time, overwhelmed, just three hours after he originally left..Credited with inventing the time machine in this masterpiece, the provocative insight of H. G. Wells continues to enthrall the readers. the Time Machine has since been adapted into many feature films and television series and has inspired many more works of fiction.",
  },
  {
    id:24,
    bookName: "You Can",
    imgUrl:"https://m.media-amazon.com/images/I/813uPMOnskL._AC_UL480_QL65_.jpg",
    author:"George Matthew Adams",
    genre:"Non-Fiction",
    publish_date:"October 23, 2009",
    description:
      "Do you often wonder whether you really have it in you to accomplish your goals, to win over obstacles, and to succeed in life? Through the empowering self-help manual you can, penned to promote personal growth and well-being for anyone who reads it, George Matthew Adams talks about things to be done to pave your way to a fulfilling, successful life—such as sitting for an hour in silence to shape your creative vision, going the extra mile in serving others, letting your character rule your work, studying your mistakes, learning to use time, and many more. Inculcate these habits, and your life will change. A powerful guide that asserts that you can do anything you set your mind to, you can is filled with quotes imparting wisdom of a man whose teachings have inspired millions—napoleon Hill, and commentary by the executive director of the Napoleon Hill foundation, don M. Green.",
  },
  {
    id:25,
    bookName: "The Alchemist",
    imgUrl:"https://m.media-amazon.com/images/I/51bVNTqHFlL._AC_UL480_QL65_.jpg",
    author:"Paulo Coelho",
    genre:"Non-Fiction",
    publish_date:"July 13, 2004",
    description:
      "Paulo Coelho's enchanting novel has inspired a devoted following around the world. This story, dazzling in its powerful simplicity and inspiring wisdom, is about an Andalusian shepherd boy named Santiago who travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. Along the way he meets a Gypsy woman, a man who calls himself",
  },
  {
    id:26,
    bookName: "The 5 am Club",
    imgUrl:"https://m.media-amazon.com/images/I/71zytzrg6lL._AC_UL480_QL65_.jpg",
    author:"Robin Sharma",
    genre:"Non-Fiction",
    publish_date:"October 16, 2009",
    description:
      "Part manifesto for mastery, part playbook for genius-grade productivity and part companion for a life lived beautifully, the 5 am club is a work that will transform your life. Forever.Legendary leadership and elite performance expert Robin Sharma introduced The 5 AM Club concept over twenty years ago, based on a revolutionary morning routine that has helped his clients maximize their productivity, activate their best health and bulletproof their serenity in this age of overwhelming complexity.Now, in this life-changing book, handcrafted by the author over a rigorous four year period, you will discover the early-rising habit that has helped so many accomplish epic results while upgrading their happiness, helpfulness and feelings of aliveness.Through an enchanting?and often amusing?story about two struggling strangers who meet an eccentric tycoon who becomes their secret mentor, The 5 AM Club will walk you through:? How great geniuses, business titans and the world?s wisest people start their mornings to produce astonishing achievements? A little-known formula you can use instantly to wake up early feeling inspired, focused and flooded with a fiery drive to get the most out of each day ? A step-by-step method to protect the quietest hours of daybreak so you have time for exercise, self-renewal and personal growth? A neuroscience-based practice proven to help make it easy to rise while most people are sleeping, giving you precious time for yourself to think, express your creativity and begin the day peacefully instead of being rushed? ?Insider-only? tactics to defend your gifts, talents and dreams against digital distraction and trivial diversions so you enjoy fortune, influence and a magnificent impact on the world",
  },
  {
    id:27,
    bookName: "The Complete Novels of Sherlock Holmes",
    imgUrl:"https://m.media-amazon.com/images/I/81NAo81PtRL._AC_UL480_QL65_.jpg",
    author:"Arthur Conan Doyle",
    genre:"Non-Fiction",
    publish_date:"July 16, 2018",
    description:
      "?There?s the scarlet thread of murder running through the colourless skein of life and our duty is to unravel it and isolate it and expose every inch of it.?Sherlock Holmes Consulting Detective 221B Baker Street London.This is where begins a historical partnership between Dr. Watson?the archetypal gentleman from the Victorian era?and the eccentric, legendary sleuth, Sherlock Holmes. Join them as they gather clues, ranging from bloodstains and footprints to cigarette ash and wedding rings and arrive at unusual and surprising conclusions. This book is a collection of the four novels written by Sir Arthur Conan Doyle: A Study in Scarlet (1887), The Sign of the Four (1890), The Hound of the Baskervilles (1902) and The Valley of Fear (1915). Featuring the timeless detective Sherlock Holmes, these novels have been successfully engrossing readers for more than a century now.",
  },
  {
    id:28,
    bookName: "The Theory of Everything",
    imgUrl:"https://m.media-amazon.com/images/I/51oHUvYzbsL._AC_UL480_QL65_.jpg",
    author:"Stephen Hawking",
    genre:"Non-Fiction",
    publish_date:"April 23, 2006",
    description:
      "Seven lectures by the brilliant theoretical physicist have been compiled into this book to try to explain to the common man, the complex problems of mathematics and the question that has been gripped everyone all for centuries, the theory of existence. Undeniably intelligent, witty and childlike in his explanations, the narrator describes every detail about the beginning of the universe. He describes what a theory that can state the initiation of everything would encompass. Ideologies about the universe by Aristotle, Augustine, Hubble, Newton and Einstein have all been briefly introduced to the reader. Black holes and Big Bang has been explained in an unsophisticated manner for anyone to understand. All these events and individual theories may be strung together to create a theory of the origin of everything and the author strongly believes that the origin might not necessarily be from a singular event. He advocates the idea of a multi-dimensional origin with a no-boundary condition to remain true to the theories of modern physics and quantum physics. The book provides a clear view of the world through Stephen’s mind where he respectfully dismisses the belief that the Universe conforms by a supernatural and all-powerful entity. About the Author Stephen Hawking: An English cosmologist, theoretical physicist, author as well as the Director of Research at the Centre for Theoretical Cosmology under the University of Cambridge, Stephen Hawking is a scholar with more than a dozen of honorary degrees. In was in 1963 that Stephen Hawking contracted a rare motor neuron disorder which gave him just two years to live, yet he went to Cambridge to become what he is today.",
  },
  {
    id:29,
    bookName: "The Blue Umbrella",
    imgUrl:"https://m.media-amazon.com/images/I/71JZ0neAP1L._AC_UL480_QL65_.jpg",
    author:"Ruskin Bond",
    genre:"Non-Fiction",
    publish_date:"May 23, 2010",
    description:
      "The Umbrella was like a flower, a great blue flower that had sprung up on the dry brown hillside.'In exchange for her lucky leopard's claw pendant, Binya acquires a beautiful blue umbrella that makes her the envy of everyone in her village, especially Ram Bharosa, the shop-keeper. Ruskin Bond's short and humorous novella, set in the picturesque hills of Garhwal, perfectly captures life in a village, where both heroism and redemption can be found.",
  },
  {
    id:30,
    bookName: "Somebody's Daughter",
    imgUrl:"https://m.media-amazon.com/images/I/713KuRzMRuL._AC_UL480_QL65_.jpg",
    author:"Ashley C.Ford",
    genre:"Non-Fiction",
    publish_date:"October 13, 2014",
    description:
      "Throughout her adolescence, Ashley Ford doesn't know how to deal with the worries that keep her up at night. If only she could turn to her father for his advice and support. But he's in prison, and she doesn't know what he did to end up there. After being raped by her ex-boyfriend, Ashley desperately searches for her sense of self. Then, her grandmother reveals the truth about her father's incarceration... and Ashley's world is turned upside down.Ashley embarks on a powerful journey to find the connections between who she is and what she was born into, discovering that, however much we might try to untether ourselves from a painful past, the ties that bind families together are the strongest ones of all.",
  },
  {
    id:31,
    bookName: "Birthday Girl",
    imgUrl:"https://m.media-amazon.com/images/I/61d8kWBnb+L._AC_UL480_QL65_.jpg",
    author:"Haruki Murakami",
    genre:"Non-Fiction",
    publish_date:"June 13, 2004",
    description:
      "She waited on tables as usual that day, her twentieth birthday. She always worked Fridays, but if things had gone according to plan on that particular Friday, she would have had the night off.One rainy Tokyo night, a waitress?s uneventful twentieth birthday takes a strange and fateful turn when she?s asked to deliver dinner to the restaurant?s reclusive owner. Birthday Girl is a beguiling, exquisitely satisfying taste of master storytelling, published to celebrate Murakami?s 70th birthday.Birthday Girl is also available in Birthday Stories and Blind Willow, Sleeping Woman.",
  },
  {
    id:32,
    bookName: "Where The Sun Never Sets",
    imgUrl:"https://m.media-amazon.com/images/I/61oofri2nsL._AC_UY327_FMwebp_QL65_.jpg",
    author:"Stuti Changle",
    genre:"Non-Fiction",
    publish_date:"March 23, 2006",
    description:
      "If you find someone's diary, would you dare open it?Well, if you chance upon your old diary, would you dare read through your past?Iti is forced to move back to her hometown of Mussoorie amid worldwide lockdown to work on her first movie script. Iti's chance encounter with her first love, Nishit, reunion with her estranged best friend, Shelly, and nights spent reading her well-kept diary, make her best memories and worst nightmares come to life. She has always run away from her past, but now has no choice.Will reading her diary prove to be an adventure worth taking for completing the script? Will life be the same? Ever?Set in the COVID-19 lockdown, from the national bestselling author of On the Open Road and You Only Live Once, Where the Sun Never Sets is a riveting personal account of unforgettable childhood dreams, turbulent teenage years, complicated close relationships, human resilience, and the never-ending journey of growing up.",
  },
  {
    id:33,
    bookName: "Don't Believe Everything You Think",
    imgUrl:"https://m.media-amazon.com/images/I/71+6w5Xpj8L._AC_UL480_QL65_.jpg",
    author:"Joseph Nguyen",
    genre:"Non-Fiction",
    publish_date:"August 03, 2014",
    description:
      "It is a practical guide to help readers overcome negative thought patterns and live a more fulfilling life. Written by Joseph Nguyen, a licensed psychologist and mental health expert, the book provides strategies for identifying and challenging cognitive distortions, such as black-and-white thinking and catastrophizing, that can lead to anxiety, depression, and other mental health issues. Through a combination of mindfulness practices, cognitive-behavioral techniques, and real-life examples, Nguyen helps readers develop healthier thought patterns and cultivate greater self-awareness. With its accessible language and actionable advice,It is an essential resource for anyone looking to improve their mental well-being.",
  },
  {
    id:34,
    bookName: "Fluffy and Me",
    imgUrl:"https://m.media-amazon.com/images/I/81s1NrnKlgL._AC_UL480_QL65_.jpg",
    author:"Anita Krishan",
    genre:"Non-Fiction",
    publish_date:"Febraury 13, 2004",
    description:
      "For it is said—“Dogs are not our whole life, but they make our lives whole.”He ran away with a shoe from the cobbler’s shack.Sitting in the middle of the road, chewing on a bone, he was unaware of the bus above him.Spotting a few scattered sheep and goats,he anticipated fun and action.A foolhardy fighter.But above all, the perfect companion, guard, and savior . . .Meet Fluffy, the cutest, wild-spirited Lhasa Apso!In the sleepy Himalayan suburb of Shimla, life had been quite laidback. And then one evening came a most unexpected phone call. A canine was on its way; the little girl would soon have a companion.And thus began this true story of an undying friendship. Of an inseparable bond between Fluffy and his little mistress. Join in their escapades as they glide from innocence to maturity, exploring the Himalayan wilderness.A heart-warming tale of the selfless love and boundless devotion that only canines are capable of showering, Anita Krishan’s Fluffy and Me will take you on an emotional journey full of laughter and tears, fun and fear.Moving, sensitive, hilarious, and deeply touching . . . an unpretentious story of love!",
  },
  {
    id:35,
    bookName: "The Secret Garden",
    imgUrl:"https://m.media-amazon.com/images/I/710kUNa9CYL._AC_UL480_QL65_.jpg",
    author:"Frances Hodgson Burnett",
    genre:"Non-Fiction",
    publish_date:"April 13,2007",
    description:
      "The young orphan Mary Lennox has become selfish and spoilt after years of neglect. She is sent to live with her uncle in Yorkshire after her parents’ death. One day, she uncovers a secret garden locked in the manor, and with the help of a robin, she finds its key in the flowerbed. As she explores the house and the dreamlike garden, she comes across many secrets and surprises. Pick up this beautifully illustrated book to join Mary on her journey after witnessing the magical world of the secret garden.",
  },
  {
    id:36,
    bookName: "The Art of War",
    imgUrl:"https://m.media-amazon.com/images/I/71H9cA7MvxS._AC_UL480_QL65_.jpg",
    author:"Sun Tzu",
    genre:"Non-Fiction",
    publish_date:"July 27, 2002",
    description:
      "Sun Tzu was a Chinese general, military strategist and a philosopher whose books have universal resonance even in the contemporary time. The Art of War has inspired Mao Zedong’s writings about Guerrilla warfare. Ho Chi Minh translated The Art of War for his generals to study. Sun Tzu’s Art of War is a widely acclaimed book on military strategy that has influenced and shaped the idea of Western and Eastern nations military philosophy. It presents complete instructions on how to win battles and manage conflicts. The theories proposed in Art of War are extremely beneficial on the battle ground and has been tried and tested by many successful military generals around the world. It is difficult to ascertain exactly when was this book written and many historians have ascribed it to different times. The Art of War has established its significance not just as a valuable book for military strategies but it also gives lesson in diplomacy and public administration and planning. It stresses on the need for healthy and friendly relations with other nations. In the context of changing world politics and rising interest in foreign policy affairs, The Art of War is a valuable read to understand about what idea goes behind shaping the strategies and policy with our neighbouring nations. This book is an ideal read if you are looking out for some inspiration to win over daily battles in your life. This book will be of special interest to people who want to read philosophy, the amazing quotes about life, winning battles and how to tide over daily struggles then it’s a must read for you. Grab a copy of this book from A now and learn the secrets to wining every battle whether personal or professional.",
  },
  {
    id:37,
    bookName: "Mindful Zen Habits",
    imgUrl:"https://m.media-amazon.com/images/I/61GscjwicrL._AC_UL480_QL65_.jpg",
    author:"Marc Reklau",
    genre:"Non-Fiction",
    publish_date:"May 05, 2009",
    description:
      "Do you want to feel happier, more positive and less stressed? Do you feel anxious or overwhelmed by your fast-paced life? Do you want to break the cycle of unhappiness and achieve inner peace? If you answered ‘yes’ to one of these questions, then this book is for you. Manuel Villa, Spain’s Mindfulness and Zen expert, and Marc Reklau, author of many international bestsellers, have joined forces to bring you Mindful Zen Habits. Can we really change our life in 30 days? Yes, we can—by changing our habits and doing little things a little bit differently day after day. Changing the habit of excessive thinking, of not giving enough room to our emotions, breaking the routine of not listening to our body—all of this and more can indeed transform our life. IN THIS BOOK, YOU WILL LEARN: • How to enjoy the present moment • How to calm down your thoughts • How to improve your focus and productivity • How to finally find peace of mind • How to create lasting habits AND SO MUCH MORE… You will find teachings and tools that your mind, your heart and your body need to undertake. We are eager to accompany you on this exciting journey.",
  },
  {
    id:38,
    bookName: "Kaizen",
    imgUrl:"https://m.media-amazon.com/images/I/91zWzzfm8SL._AC_UL480_QL65_.jpg",
    author:"Sarah Harvey",
    genre:"Non-Fiction",
    publish_date:"December 12, 2019",
    description:
      "A gorgeously illustrated introduction to the Japanese method of Kaizen – meaning 'change' 'good' – showing you how to make small, step-by-step changes to transform your life.'This beautiful, simple book suggests tiny changes we can make to improve all areas of life, from friendships to a cluttered flat.' – Marianne Power, author of Help Me!From Marie Kondo to Hygge to Ikigai, in recent years, philosophies to help people live better lives have taken the world by storm. Kaizen will change your habits for good.This beautifully colour illustrated and photographed book offers a way to build good habits and remove bad ones, without being too hard on yourself along the way. The focus is on having patience, shaping solutions for yourself rather than following others and not giving up when things aren’t working. Rather than being critical of your faults, the emphasis is on mindful, positive change. Well-known in the business and sports worlds as a method for mapping incremental goals, Kaizen is also a wonderful tool for slowly improving aspects of your life, without feeling daunted or overwhelmed by the challenge.Kaizen by Sarah Harvey brings you a personalized and flexible approach to change that you can apply to any area of your life (whether it is health, relationships, money, career, habits, new hobbies or general wellbeing). You can adapt it to suit working style, preferences and personality. Every person’s experience of Kaizen will be different, which is what makes it such an effective tool for positive change.",
  },
  {
    id:39,
    bookName: "unMIND",
    imgUrl:"https://m.media-amazon.com/images/I/818L45Nm8cL._AC_UL480_QL65_.jpg",
    author:"Siddharth Tripathi",
    genre:"Non-Fiction",
    publish_date:"Febraury 24, 2001",
    description:
      "All human pursuit is born out of a longing for happiness. Yet, this feeling is universally elusive and when attained, it is ephemeral.Why is it so hard to find happiness? Is there a way to make it last? If Sri Ramana Maharshi was asked this question, he would say, “Yes, there is a way. But to get there you must first find out who you really are.” Ramana Maharshi (1879-1950) and Ramesh Balsekar (1917-2009) are two of the greatest mystics of modern India. They taught non-duality (or advaita) as a way to Self-realization. Their teachings didn’t advocate a complex practice or a long path to enlightenment, instead they simply pointed out that we needed a correct understanding of our identity in order to be happy. unMind is a pure, succinct graphical retelling of some of the most powerful spiritual teachings that have emerged from India in the last century.",
  },
  {
    id:40,
    bookName: "The Greatest Short Stories of Leo Tolstoy",
    imgUrl:"https://m.media-amazon.com/images/I/71hYLVvoRfL._AC_UY327_FMwebp_QL65_.jpg",
    author:"Leo Tolstoy",
    genre:"Non-Fiction",
    publish_date:"November 29, 2009",
    description:
      "The Russian novelist and moral philosopher Leo Tolstoy (1828-1910) ranks as one of the world's great writers and his War and Peace has been called the greatest novel ever written. The purpose of all true creative art, he believed, is to teach. But the message in all his stories is presented with such humor that the reader hardly realizes that it is strongly didactic. The seven parts into which this book is divided include the best known Tolstoy stories. God Sees the Truth, but Waits and A Prisoner in the Caucasus which Tolstoy himself considered as his best, How Much Land Does a Man Need? depicting the greed of a peasant for land, the most brilliantly told parable, Ivan the Fool these are all contained in this volume.",
  },
  {
    id:41,
    bookName: "War and Peace",
    imgUrl:"https://m.media-amazon.com/images/I/71N+QQjHX6L._AC_UY327_FMwebp_QL65_.jpg",
    author:"Leo Tolstoy",
    genre:"Non-Fiction",
    publish_date:"April 1,2015",
    description:
      "All human pursuit is born out of a longing for happiness. Yet, this feeling is universally elusive and when attained, it is ephemeral.Why is it so hard to find happiness? Is there a way to make it last? If Sri Ramana Maharshi was asked this question, he would say, “Yes, there is a way. But to get there you must first find out who you really are.” Ramana Maharshi (1879-1950) and Ramesh Balsekar (1917-2009) are two of the greatest mystics of modern India. They taught non-duality (or advaita) as a way to Self-realization. Their teachings didn’t advocate a complex practice or a long path to enlightenment, instead they simply pointed out that we needed a correct understanding of our identity in order to be happy. unMind is a pure, succinct graphical retelling of some of the most powerful spiritual teachings that have emerged from India in the last century.",
  },
  {
    id:42,
    bookName:"What is Art?",
    imgUrl:"https://m.media-amazon.com/images/I/61bdjbhcHRL._AC_UY327_FMwebp_QL65_.jpg",
    author:"Leo Tolstoy",
    genre:"Non-Fiction",
    publish_date:"August 31,1995",
    description:
      "All human pursuit is born out of a longing for happiness. Yet, this feeling is universally elusive and when attained, it is ephemeral.Why is it so hard to find happiness? Is there a way to make it last? If Sri Ramana Maharshi was asked this question, he would say, “Yes, there is a way. But to get there you must first find out who you really are.” Ramana Maharshi (1879-1950) and Ramesh Balsekar (1917-2009) are two of the greatest mystics of modern India. They taught non-duality (or advaita) as a way to Self-realization. Their teachings didn’t advocate a complex practice or a long path to enlightenment, instead they simply pointed out that we needed a correct understanding of our identity in order to be happy. unMind is a pure, succinct graphical retelling of some of the most powerful spiritual teachings that have emerged from India in the last century.",
  },
  {
    id:43,
    bookName: "Metamorphosis",
    imgUrl:"https://m.media-amazon.com/images/I/91h14raE85S._AC_UY327_FMwebp_QL65_.jpg",
    author:"Franz Kafka",
    genre:"Non-Fiction",
    publish_date:"January 1,2014",
    description:
      "'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.' Thus begins The Metamorphosis, cited as one of the seminal works of fiction of the twentieth century. A story of Gregor Samsa, a travelling salesman, who wakes up one day to discover that he has metamorphosed into a bug, The Metamorphosis is a book that concerns itself with the themes of alienation, disillusionment and existentialism. As Samsa struggles to reconcile his humanity with his transformation, Kafka, very deftly, weaves his readers into a web that deals with the absurdity of existence, the alienating experience of modern life and the cruelty and incomprehensibility of authoritarian power, leaving them at once stunned and impressed.",
  },
  {
    id:44,
    bookName: "As a Man Thinketh",
    imgUrl:"https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY327_FMwebp_QL65_.jpg",
    author:"James Allen",
    genre:"Non-Fiction",
    publish_date:"November 6,2017",
    description:
      "Can you think of a single moment in the whole day when your mind is blank and thoughtless?Do you know how powerful every thought is??Cherish your visions; cherish your ideals; cherish the music that stirs in your heart, the beauty that forms in your mind, the loveliness that drapes your purest thoughts, for out of them will grow all delightful conditions, all heavenly environment; of these, if you but remain true to them, your world will at last be built. ?Giving an insight into the power of thoughts; the effect they have on our health, body and circumstances; and how we become what we think; this compelling literary essay by James Allen contains practical wisdom which will inspire, enlighten and help us discover our hidden powers. Written in a spiritual tone, As a Man Thinketh has been a valuable source of inspiration ever since its first publication in 1903. It continues to remain a classic bestseller.",
  },
  {
    id:45,
    bookName: "The Miracles of Your Mind",
    imgUrl:"https://m.media-amazon.com/images/I/612QivHiwzL._AC_UY327_FMwebp_QL65_.jpg",
    author:"Joseph Murphy",
    genre:"Non-Fiction",
    publish_date:"Febraury 24, 2001",
    description:
      "HARNESS THE INFINITE POWER OF YOUR SUBCONSCIOUS MIND Whether you wish to overcome a bad habit, become successful, have harmonious relationships or achieve your long cherished goal, you subconscious mind can guide you to accomplish that. Inn this book, Dr. Joseph Murphy expands the theory about the latent power of your subconscious mind ; and how this power can be used to improve every aspect of your life. The Miracles of Your Mind provides you with: · The tools that will open up the infinite power of your subconscious mind · Tips on how to harness of the power of mind · The technique of awakening your dormant wisdom · Simple ways to make your subconscious mind work for you to resolve various life issues and obstacles Follow the guidelines mentioned in this book to harness of the power of mind, and invite happiness and prosperity into your lives.",
  },
];

export default carData;
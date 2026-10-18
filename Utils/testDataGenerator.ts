const statesByCountry: Record<string, string[]> = {
  Australia: ['New South Wales', 'Queensland', 'Victoria'],
  Canada: ['Alberta', 'Ontario', 'Quebec'],
  India: ['Gujarat', 'Maharashtra', 'Tamil Nadu'],
  'United Kingdom': ['England', 'Scotland', 'Wales'],
  'United States': ['California', 'New York', 'Texas'],
};

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateRandomFullName(): string {
  return `${randomItem(['Ava', 'Liam', 'Noah', 'Maya', 'Allu', 'kallu', 'tullu',
  'Emma', 'Olivia', 'Amelia', 'Sophia', 'Isabella', 'Mia', 'Luna',
  'Ethan', 'Lucas', 'Oliver', 'Elijah', 'James', 'Henry', 'Leo',
  'Aria', 'Ella', 'Lily', 'Chloe', 'Grace', 'Zoe', 'Ivy',
  'Mason', 'Logan', 'Jackson', 'Aiden', 'Caden', 'Ryan', 'Dylan',
  'Aarav', 'Vivaan', 'Aditya', 'Arjun', 'Ishaan', 'Reyansh', 'Krishna',
  'Ananya', 'Aadhya', 'Diya', 'Kiara', 'Myra', 'Saanvi', 'Pari',
  'Kabir', 'Rohan', 'Rahul', 'Karan', 'Varun', 'Rishi', 'Dev',
  'Priya', 'Neha', 'Riya', 'Pooja', 'Anjali', 'Kavya', 'Meera',
  'Ayaan', 'Atharv', 'Dhruv', 'Veer', 'Shaurya', 'Yash', 'Om',
  'Ira', 'Tara', 'Siya', 'Avni', 'Navya', 'Ishita', 'Tanya',
  'Aadi', 'Bunny', 'Chiku', 'Golu', 'Molu', 'Piku', 'Tinku',
  'Pinku', 'Sonu', 'Monu', 'Rinku', 'Chintu', 'Bittu', 'Mintu',
  'Guddu', 'Bablu', 'Babloo', 'Dabbu', 'Kittu', 'Laddoo', 'Mithu',
  'Allu', 'Kallu', 'Tullu', 'Bullu', 'Gullu', 'Pallu', 'Jallu',
  'Dillu', 'Billu', 'Chullu', 'Mallu', 'Nallu', 'Tillu', 'Pillu',
  'Lulu', 'Mimi', 'Coco', 'Kiki', 'Bobo', 'Dodo', 'Fifi',
  'Toto', 'Nunu', 'Zuzu', 'Lala', 'Bibi', 'Roro', 'Momo',
  'Aaru', 'Babu', 'Bebo', 'Chiku', 'Chikki', 'Mishri', 'Mishti',
  'Ladoo', 'Puchku', 'Puchki', 'Guggu', 'Gugli', 'Tuffy', 'Fluffy',
  'Sunny', 'Bunny', 'Honey', 'Cutie', 'Sweetie', 'Dolly', 'Molly',
  'Rocky', 'Bobby', 'Jojo', 'Joey', 'Teddy', 'Panda', 'Peanut',
  'Muffin', 'Cookie', 'Brownie', 'Cupcake', 'Candy', 'Toffee', 'Jelly',
  'Apple', 'Mango', 'Peach', 'Cherry', 'Berry', 'Kiwi', 'Coco',
  'Aisha', 'Zara', 'Zoya', 'Inaya', 'Fatima', 'Sana', 'Alina',
  'Imran', 'Ayaan', 'Rehan', 'Zain', 'Faizan', 'Sameer', 'Danish',
  'Anika', 'Naina', 'Nikita', 'Simran', 'Sakshi', 'Shruti', 'Shreya',
  'Aman', 'Abhay', 'Akash', 'Amit', 'Ankit', 'Ashish', 'Deepak',
  'Divya', 'Disha', 'Garima', 'Isha', 'Jiya', 'Juhi', 'Khushi',
  'Manav', 'Mohit', 'Naman', 'Nikhil', 'Pranav', 'Rajat', 'Rohit',
  'Sanya', 'Shanaya', 'Tanvi', 'Vanya', 'Yashvi', 'Zeenat', 'Aashi',
  'Abeer', 'Ansh', 'Ayush', 'Bhavya', 'Chirag', 'Daksh', 'Darsh',
  'Esha', 'Fiza', 'Gauri', 'Harsh', 'Himanshu', 'Jatin', 'Laksh',
  'Lavanya', 'Mahika', 'Manya', 'Nandini', 'Palak', 'Prisha', 'Riddhi',
  'Samar', 'Samarth', 'Siddharth', 'Tejas', 'Uday', 'Utkarsh', 'Vihaan',
  'Avi', 'Aru', 'Anu', 'Ammu', 'Appu', 'Akku', 'Bunny',
  'Chinnu', 'Chunnu', 'Gappu', 'Gappu', 'Kuku', 'Lolo', 'Makku',
  'Nikku', 'Pappu', 'Pappu', 'Raju', 'Rani', 'Ramu', 'Shona',
  'Shonu', 'Tanu', 'Tanuu', 'Vinu', 'Vicky', 'Vishu', 'Yuvi',
  'Aki', 'Bini', 'Bittu', 'Chiku', 'Dinku', 'Funtoosh', 'Ginni',
  'Happy', 'Jolly', 'Lucky', 'Micky', 'Nicky', 'Ollie', 'Poppy',
  'Ricky', 'Sammy', 'Timmy', 'Tommy', 'Willy', 'Ziggy', 'Remy',
  'Alex', 'Andy', 'Charlie', 'Chris', 'Drew', 'Elliot', 'Frankie',
  'Jamie', 'Jordan', 'Kai', 'Morgan', 'Robin', 'Riley', 'Taylor',
  'Addison', 'Aubrey', 'Aurora', 'Bella', 'Claire', 'Daisy', 'Evelyn',
  'Freya', 'Hazel', 'Isla', 'Layla', 'Lucy', 'Naomi', 'Nora',
  'Ruby', 'Sarah', 'Stella', 'Violet', 'Willow', 'Iris', 'Elena',
  'Aaron', 'Adam', 'Andrew', 'Anthony', 'Asher', 'Benjamin', 'Caleb',
  'Carter', 'Charles', 'Christopher', 'Daniel', 'David', 'Edward', 'Ezra',
  'Felix', 'Gabriel', 'George', 'Grayson', 'Isaac', 'Jack', 'Jacob',
  'John', 'Joseph', 'Julian', 'Levi', 'Lincoln', 'Matthew', 'Michael',
  'Nathan', 'Nicholas', 'Owen', 'Samuel', 'Sebastian', 'Theodore', 'Thomas',
  'William', 'Wyatt', 'Xavier', 'Zachary', 'Finn', 'Jasper', 'Miles',
  'Amara', 'Anaya', 'Ariana', 'Ayla', 'Eliza', 'Emilia', 'Eva',
  'Fatima', 'Hana', 'Jasmine', 'Leah', 'Lila', 'Mila', 'Nadia',
  'Nyla', 'Rhea', 'Sabrina', 'Sasha', 'Sofia', 'Tia', 'Yara',
  'Aarohi', 'Aarush', 'Aayush', 'Advait', 'Agastya', 'Akshat', 'Anirudh',
  'Anmol', 'Arnav', 'Aryan', 'Atharv', 'Avyaan', 'Bharat', 'Chetan',
  'Dheeraj', 'Gaurav', 'Govind', 'Jay', 'Keshav', 'Krish', 'Kunal',
  'Madhav', 'Manish', 'Mayank', 'Neeraj', 'Parth', 'Pratyush', 'Raghav',
  'Ritvik', 'Sahil', 'Sarthak', 'Shivansh', 'Shlok', 'Shreyansh', 'Soham',
  'Suryansh', 'Tarun', 'Tushar', 'Vedant', 'Vikram', 'Viraj', 'Vivaan',
  'Aakriti', 'Aaradhya', 'Aashi', 'Aastha', 'Akshara', 'Amrita', 'Anushka',
  'Bhumi', 'Charvi', 'Devika', 'Dhwani', 'Ekta', 'Hansika', 'Ishani',
  'Janvi', 'Kashvi', 'Mahima', 'Mitali', 'Muskan', 'Navika', 'Nitya',
  'Pallavi', 'Pragya', 'Pranavi', 'Rashi', 'Ritika', 'Saisha', 'Samaira',
  'Shanvi', 'Shivani', 'Srishti', 'Suhani', 'Swara', 'Trisha', 'Vritika',
  'Yamini', 'Aanya', 'Aashi', 'Anvi', 'Baani', 'Charu', 'Chhavi',
  'Dhani', 'Eiliyah', 'Falguni', 'Hiral', 'Ishika', 'Jhanvi', 'Kaira',
  'Kuhu', 'Mahira', 'Navya', 'Ojasvi', 'Pranita', 'Raina', 'Suhana',
  'Tisha', 'Urvi', 'Veda', 'Yukti', 'Ziana', 'Ziva', 'Aiza',
  'Bebo', 'Chashni', 'Duggu', 'Fuddu', 'Gubbu', 'Jiggy', 'Koko',
  'Lappy', 'Mappy', 'Nappy', 'Poppy', 'Quicky', 'Rolly', 'Silly',
  'Tappy', 'Winky', 'Yoyo', 'Zappy', 'Bingo', 'Dingo', 'Froyo',
  'Gizmo', 'Hippo', 'Jumbo', 'Koko', 'Mango', 'Nugget', 'Oreo',
  'Pickle', 'Rascal', 'Scooby', 'Snoopy', 'Sprout', 'Waffles', 'Zippy',
  'Bubbles', 'Doodle', 'Giggles', 'Nibbles', 'Puddles', 'Snuggles', 'Twinkle',
  'Whiskers', 'Zigzag', 'BamBam', 'Chatter', 'Dumpling', 'Flapjack', 'Goofy',
  'Marshmallow', 'Noodle', 'Peaches', 'Pumpkin', 'Ruffles', 'Sprinkles', 'Tater',
  'Totoo', 'Tullu', 'Kallu', 'Allu', 'Bullu', 'Gullu', 'Mullu',
  'Pullu', 'Sallu', 'Jullu', 'Nillu', 'Dullu', 'Tillu', 'Chillu',
  'Rullu', 'Lallu', 'Pallu', 'Vallu', 'Yullu', 'Zullu', 'Mallu',
  'Kiki', 'Mimi', 'Riri', 'Sisi', 'Titi', 'Vivi', 'Wawa',
  'Yaya', 'Zaza', 'Lili', 'Nini', 'Didi', 'Gigi', 'Fifi',
  'Bubu', 'Dudu', 'Fufu', 'Huhu', 'Juju', 'Mumu', 'Pupu',
  'Ruru', 'Susu', 'Tutu', 'Vuvu', 'Wuwu', 'Yuyu', 'Zuzu'
])} ${randomItem(['Smith', 'Patel', 'Brown', 'Khan',
  'Sharma', 'Verma', 'Gupta', 'Singh', 'Kumar', 'Yadav', 'Patel',
  'Shah', 'Mehta', 'Jain', 'Agarwal', 'Mishra', 'Pandey', 'Tiwari',
  'Dubey', 'Chauhan', 'Rathore', 'Rajput', 'Thakur', 'Joshi', 'Saxena',
  'Malhotra', 'Kapoor', 'Khanna', 'Chopra', 'Arora', 'Bansal', 'Goyal',
  'Mittal', 'Jindal', 'Goel', 'Singhal', 'Aggarwal', 'Mahajan', 'Sethi',
  'Bhatia', 'Puri', 'Anand', 'Suri', 'Oberoi', 'Kohli', 'Ahuja',
  'Bajaj', 'Talwar', 'Wadhwa', 'Chawla', 'Juneja', 'Luthra', 'Sabharwal',
  'Sood', 'Garg', 'Dhingra', 'Grover', 'Madan', 'Nanda', 'Tandon',
  'Sinha', 'Srivastava', 'Tripathi', 'Shukla', 'Pathak', 'Purohit', 'Trivedi',
  'Chaturvedi', 'Dixit', 'Vyas', 'Upadhyay', 'Dwivedi', 'Ojha', 'Jha',
  'Thakur', 'Raj', 'Rana', 'Rawat', 'Negi', 'Bisht', 'Bisht',
  'Chandel', 'Tomar', 'Shekhawat', 'Solanki', 'Parmar', 'Sisodia', 'Bhati',
  'Kushwaha', 'Maurya', 'Saini', 'Lodhi', 'Gurjar', 'Jat', 'Deshmukh',
  'Pawar', 'Shinde', 'Jadhav', 'Patil', 'Kulkarni', 'Desai', 'Joshi',
  'Bhosale', 'Gaikwad', 'More', 'Kadam', 'Chavan', 'Sawant', 'Salunkhe',
  'Nair', 'Menon', 'Pillai', 'Kurup', 'Panicker', 'Warrier', 'Nambootiri',
  'Iyer', 'Iyengar', 'Raman', 'Subramanian', 'Krishnan', 'Srinivasan', 'Venkatesh',
  'Reddy', 'Naidu', 'Rao', 'Chowdary', 'Goud', 'Kamma', 'Kapu',
  'Varma', 'Murthy', 'Shetty', 'Hegde', 'Kamath', 'Bhat', 'Acharya',
  'Gowda', 'Urs', 'Shanbhag', 'Pai', 'Prabhu', 'Alva', 'Karanth',
  'Poojary', 'Mallya', 'Kashyap', 'Bose', 'Ghosh', 'Banerjee', 'Chatterjee',
  'Mukherjee', 'Bhattacharya', 'Chakraborty', 'Das', 'Dutta', 'Sen', 'Roy',
  'Sarkar', 'Mitra', 'Basu', 'Pal', 'Saha', 'Mondal', 'Biswas',
  'Majumdar', 'Barman', 'Nath', 'Deb', 'Lahiri', 'Datta', 'Guha',
  'Panda', 'Mohanty', 'Patnaik', 'Nayak', 'Sahu', 'Pradhan', 'Behera',
  'Mishra', 'Rout', 'Samal', 'Swain', 'Dasgupta', 'Bhowmick', 'Barua',
  'Borah', 'Gogoi', 'Saikia', 'Deka', 'Hazarika', 'Kalita', 'Phukan',
  'Ahmed', 'Khan', 'Shaikh', 'Sheikh', 'Ansari', 'Qureshi', 'Siddiqui',
  'Hussain', 'Ali', 'Malik', 'Mirza', 'Farooqui', 'Choudhury', 'Rahman',
  'Chaudhary', 'Memon', 'Pathan', 'Mansoori', 'Usmani', 'Hashmi', 'Naqvi',
  'Abdullah', 'Akhtar', 'Aziz', 'Baig', 'Butt', 'Dar', 'Lone',
  'Wani', 'Bhat', 'Shah', 'Mir', 'Koul', 'Pandita', 'Raina',
  'Gill', 'Sandhu', 'Sidhu', 'Dhillon', 'Brar', 'Grewal', 'Mann',
  'Bains', 'Randhawa', 'Cheema', 'Saini', 'Aulakh', 'Toor', 'Virk',
  'Sohal', 'Johal', 'Deol', 'Dosanjh', 'Chahal', 'Sekhon', 'Pannu',
  'Chaudhry', 'Buttar', 'Lamba', 'Sangha', 'Bhullar', 'Kahlon', 'Tiwana',
  'Fernando'])}`;
}

export function generateRandomEmail(): string {
  const randomNumber = Math.floor(Math.random() * (10000 - 100 + 1)) + 100;
  return `ramchand+${randomNumber}@gmail.com`;
}

export function generateRandomCountry(): string {
  return randomItem(Object.keys(statesByCountry));
}

export function generateRandomState(country: string): string {
  const states = statesByCountry[country];
  if (!states) throw new Error(`Unsupported country: ${country}`);
  return randomItem(states);
}

export function generateRandomPhoneNumber(country: string): string {
  const callingCodes: Record<string, string> = {
    Australia: '+61',
    Canada: '+1',
    India: '+91',
    'United Kingdom': '+44',
    'United States': '+1',
  };
  const callingCode = callingCodes[country];
  if (!callingCode) throw new Error(`Unsupported country: ${country}`);
  return `${callingCode}555${Math.floor(1000000 + Math.random() * 9000000)}`;
}

export function generateRandomOrganizationName(): string {
  return `${randomItem(['Bright', 'Northstar', 'Summit', 'Vertex'])} ${randomItem(['Labs', 'Solutions', 'Systems'])}`;
}

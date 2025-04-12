import React from 'react';

const UserData = () => {
    return (
        <div>
            
        </div>
    );
}

const users = [
    // Dữ liệu người dùng hiện có (24 dòng)
    { id: 1, username: 'john_doe', fullname: 'John Doe', birthday: '1990-01-01', gender: 'Male', email: 'john.doe@example.com', role: 'Admin' },
    { id: 2, username: 'jane_smith', fullname: 'Jane Smith', birthday: '1992-03-12', gender: 'Female', email: 'jane.smith@example.com', role: 'Customer' },
    { id: 3, username: 'bob_jones', fullname: 'Bob Jones', birthday: '1985-07-19', gender: 'Male', email: 'bob.jones@example.com', role: 'Staff' },
    { id: 4, username: 'alice_brown', fullname: 'Alice Brown', birthday: '1991-04-15', gender: 'Female', email: 'alice.brown@example.com', role: 'Admin' },
    { id: 5, username: 'michael_white', fullname: 'Michael White', birthday: '1987-02-20', gender: 'Male', email: 'michael.white@example.com', role: 'Customer' },
    { id: 6, username: 'lisa_black', fullname: 'Lisa Black', birthday: '1995-11-11', gender: 'Female', email: 'lisa.black@example.com', role: 'Staff' },
    { id: 7, username: 'david_green', fullname: 'David Green', birthday: '1993-08-22', gender: 'Male', email: 'david.green@example.com', role: 'Customer' },
    { id: 8, username: 'emma_clark', fullname: 'Emma Clark', birthday: '1989-09-09', gender: 'Female', email: 'emma.clark@example.com', role: 'Admin' },
    { id: 9, username: 'william_harris', fullname: 'William Harris', birthday: '1984-07-30', gender: 'Male', email: 'william.harris@example.com', role: 'Staff' },
    { id: 10, username: 'olivia_martin', fullname: 'Olivia Martin', birthday: '1996-03-05', gender: 'Female', email: 'olivia.martin@example.com', role: 'Customer' },
    { id: 11, username: 'sophia_thompson', fullname: 'Sophia Thompson', birthday: '1992-12-25', gender: 'Female', email: 'sophia.thompson@example.com', role: 'Staff' },
    { id: 12, username: 'james_walker', fullname: 'James Walker', birthday: '1988-05-17', gender: 'Male', email: 'james.walker@example.com', role: 'Admin' },
    { id: 13, username: 'charlotte_robinson', fullname: 'Charlotte Robinson', birthday: '1991-10-10', gender: 'Female', email: 'charlotte.robinson@example.com', role: 'Customer' },
    { id: 14, username: 'liam_wilson', fullname: 'Liam Wilson', birthday: '1986-06-14', gender: 'Male', email: 'liam.wilson@example.com', role: 'Staff' },
    { id: 15, username: 'ava_lewis', fullname: 'Ava Lewis', birthday: '1994-01-22', gender: 'Female', email: 'ava.lewis@example.com', role: 'Admin' },
    { id: 16, username: 'noah_hall', fullname: 'Noah Hall', birthday: '1990-09-18', gender: 'Male', email: 'noah.hall@example.com', role: 'Customer' },
    { id: 17, username: 'mia_allen', fullname: 'Mia Allen', birthday: '1993-03-13', gender: 'Female', email: 'mia.allen@example.com', role: 'Staff' },
    { id: 18, username: 'jackson_young', fullname: 'Jackson Young', birthday: '1985-07-25', gender: 'Male', email: 'jackson.young@example.com', role: 'Customer' },
    { id: 19, username: 'amelia_king', fullname: 'Amelia King', birthday: '1992-02-14', gender: 'Female', email: 'amelia.king@example.com', role: 'Admin' },
    { id: 20, username: 'lucas_scott', fullname: 'Lucas Scott', birthday: '1996-08-07', gender: 'Male', email: 'lucas.scott@example.com', role: 'Staff' },
    { id: 21, username: 'harper_adams', fullname: 'Harper Adams', birthday: '1995-12-02', gender: 'Female', email: 'harper.adams@example.com', role: 'Customer' },
    { id: 22, username: 'benjamin_moore', fullname: 'Benjamin Moore', birthday: '1987-04-04', gender: 'Male', email: 'benjamin.moore@example.com', role: 'Admin' },
    { id: 23, username: 'ella_carter', fullname: 'Ella Carter', birthday: '1994-11-20', gender: 'Female', email: 'ella.carter@example.com', role: 'Staff' },
    { id: 24, username: 'henry_evans', fullname: 'Henry Evans', birthday: '1988-03-28', gender: 'Male', email: 'henry.evans@example.com', role: 'Customer' },
    // Dữ liệu người dùng mới (76 dòng)
    { id: 25, username: 'samuel_lee', fullname: 'Samuel Lee', birthday: '1993-04-10', gender: 'Male', email: 'samuel.lee@example.com', role: 'Customer' },
    { id: 26, username: 'sophie_bennett', fullname: 'Sophie Bennett', birthday: '1995-12-24', gender: 'Female', email: 'sophie.bennett@example.com', role: 'Staff' },
    { id: 27, username: 'jack_wright', fullname: 'Jack Wright', birthday: '1989-06-13', gender: 'Male', email: 'jack.wright@example.com', role: 'Admin' },
    { id: 28, username: 'lily_cooper', fullname: 'Lily Cooper', birthday: '1992-09-01', gender: 'Female', email: 'lily.cooper@example.com', role: 'Customer' },
    { id: 29, username: 'ethan_ward', fullname: 'Ethan Ward', birthday: '1996-02-17', gender: 'Male', email: 'ethan.ward@example.com', role: 'Staff' },
    { id: 30, username: 'chloe_perez', fullname: 'Chloe Perez', birthday: '1994-07-05', gender: 'Female', email: 'chloe.perez@example.com', role: 'Customer' },
    { id: 31, username: 'mason_jenkins', fullname: 'Mason Jenkins', birthday: '1990-10-22', gender: 'Male', email: 'mason.jenkins@example.com', role: 'Admin' },
    { id: 32, username: 'natalie_gray', fullname: 'Natalie Gray', birthday: '1988-05-14', gender: 'Female', email: 'natalie.gray@example.com', role: 'Staff' },
    { id: 33, username: 'aaron_brooks', fullname: 'Aaron Brooks', birthday: '1991-01-06', gender: 'Male', email: 'aaron.brooks@example.com', role: 'Customer' },
    { id: 34, username: 'grace_turner', fullname: 'Grace Turner', birthday: '1993-11-18', gender: 'Female', email: 'grace.turner@example.com', role: 'Staff' },
    { id: 35, username: 'logan_morris', fullname: 'Logan Morris', birthday: '1987-08-02', gender: 'Male', email: 'logan.morris@example.com', role: 'Admin' },
    { id: 36, username: 'zoe_morgan', fullname: 'Zoe Morgan', birthday: '1995-09-20', gender: 'Female', email: 'zoe.morgan@example.com', role: 'Customer' },
    { id: 37, username: 'nathan_bell', fullname: 'Nathan Bell', birthday: '1992-06-28', gender: 'Male', email: 'nathan.bell@example.com', role: 'Staff' },
    { id: 38, username: 'lily_baker', fullname: 'Lily Baker', birthday: '1994-02-11', gender: 'Female', email: 'lily.baker@example.com', role: 'Customer' },
    { id: 39, username: 'ryan_edwards', fullname: 'Ryan Edwards', birthday: '1989-03-30', gender: 'Male', email: 'ryan.edwards@example.com', role: 'Admin' },
    { id: 40, username: 'emily_peters', fullname: 'Emily Peters', birthday: '1991-12-09', gender: 'Female', email: 'emily.peters@example.com', role: 'Staff' },
    { id: 41, username: 'dylan_morris', fullname: 'Dylan Morris', birthday: '1993-08-04', gender: 'Male', email: 'dylan.morris@example.com', role: 'Customer' },
    { id: 42, username: 'ava_clarke', fullname: 'Ava Clarke', birthday: '1995-10-14', gender: 'Female', email: 'ava.clarke@example.com', role: 'Admin' },
    { id: 43, username: 'hunter_stevens', fullname: 'Hunter Stevens', birthday: '1990-07-11', gender: 'Male', email: 'hunter.stevens@example.com', role: 'Staff' },
    { id: 44, username: 'sara_mitchell', fullname: 'Sara Mitchell', birthday: '1992-01-09', gender: 'Female', email: 'sara.mitchell@example.com', role: 'Customer' },
    { id: 45, username: 'christopher_hall', fullname: 'Christopher Hall', birthday: '1991-08-29', gender: 'Male', email: 'christopher.hall@example.com', role: 'Admin' },
    { id: 46, username: 'nina_wilson', fullname: 'Nina Wilson', birthday: '1987-03-03', gender: 'Female', email: 'nina.wilson@example.com', role: 'Staff' },
    { id: 47, username: 'kevin_smith', fullname: 'Kevin Smith', birthday: '1995-05-12', gender: 'Male', email: 'kevin.smith@example.com', role: 'Customer' },
    { id: 48, username: 'amelia_davis', fullname: 'Amelia Davis', birthday: '1992-08-30', gender: 'Female', email: 'amelia.davis@example.com', role: 'Admin' },
    { id: 49, username: 'chris_lee', fullname: 'Chris Lee', birthday: '1986-04-22', gender: 'Male', email: 'chris.lee@example.com', role: 'Staff' },
    { id: 50, username: 'oliver_anderson', fullname: 'Oliver Anderson', birthday: '1994-06-11', gender: 'Male', email: 'oliver.anderson@example.com', role: 'Customer' },
    { id: 51, username: 'luna_morris', fullname: 'Luna Morris', birthday: '1995-03-09', gender: 'Female', email: 'luna.morris@example.com', role: 'Admin' },
    { id: 52, username: 'ella_brown', fullname: 'Ella Brown', birthday: '1993-07-19', gender: 'Female', email: 'ella.brown@example.com', role: 'Staff' },
    { id: 53, username: 'isaac_james', fullname: 'Isaac James', birthday: '1987-11-17', gender: 'Male', email: 'isaac.james@example.com', role: 'Customer' },
    { id: 54, username: 'chloe_taylor', fullname: 'Chloe Taylor', birthday: '1996-02-01', gender: 'Female', email: 'chloe.taylor@example.com', role: 'Admin' },
    { id: 55, username: 'joshua_rodriguez', fullname: 'Joshua Rodriguez', birthday: '1990-12-12', gender: 'Male', email: 'joshua.rodriguez@example.com', role: 'Staff' },
    { id: 56, username: 'maria_martinez', fullname: 'Maria Martinez', birthday: '1992-04-15', gender: 'Female', email: 'maria.martinez@example.com', role: 'Customer' },
    { id: 57, username: 'jacob_torres', fullname: 'Jacob Torres', birthday: '1995-05-21', gender: 'Male', email: 'jacob.torres@example.com', role: 'Admin' },
    { id: 58, username: 'grace_davis', fullname: 'Grace Davis', birthday: '1991-08-14', gender: 'Female', email: 'grace.davis@example.com', role: 'Staff' },
    { id: 59, username: 'ryan_lee', fullname: 'Ryan Lee', birthday: '1989-10-10', gender: 'Male', email: 'ryan.lee@example.com', role: 'Customer' },
    { id: 60, username: 'ava_wilson', fullname: 'Ava Wilson', birthday: '1996-03-08', gender: 'Female', email: 'ava.wilson@example.com', role: 'Admin' },
    { id: 61, username: 'liam_martin', fullname: 'Liam Martin', birthday: '1994-09-29', gender: 'Male', email: 'liam.martin@example.com', role: 'Staff' },
    { id: 62, username: 'sophie_jones', fullname: 'Sophie Jones', birthday: '1992-05-13', gender: 'Female', email: 'sophie.jones@example.com', role: 'Customer' },
    { id: 63, username: 'daniel_smith', fullname: 'Daniel Smith', birthday: '1987-07-20', gender: 'Male', email: 'daniel.smith@example.com', role: 'Admin' },
    { id: 64, username: 'emily_harris', fullname: 'Emily Harris', birthday: '1995-02-15', gender: 'Female', email: 'emily.harris@example.com', role: 'Staff' },
    { id: 65, username: 'james_brown', fullname: 'James Brown', birthday: '1993-06-10', gender: 'Male', email: 'james.brown@example.com', role: 'Customer' },
    { id: 66, username: 'olivia_johnson', fullname: 'Olivia Johnson', birthday: '1990-08-22', gender: 'Female', email: 'olivia.johnson@example.com', role: 'Admin' },
    { id: 67, username: 'noah_baker', fullname: 'Noah Baker', birthday: '1992-11-30', gender: 'Male', email: 'noah.baker@example.com', role: 'Staff' },
    { id: 68, username: 'mia_wood', fullname: 'Mia Wood', birthday: '1994-01-17', gender: 'Female', email: 'mia.wood@example.com', role: 'Customer' },
    { id: 69, username: 'ethan_davis', fullname: 'Ethan Davis', birthday: '1991-09-25', gender: 'Male', email: 'ethan.davis@example.com', role: 'Admin' },
    { id: 70, username: 'aiden_martin', fullname: 'Aiden Martin', birthday: '1988-07-07', gender: 'Male', email: 'aiden.martin@example.com', role: 'Staff' },
    { id: 71, username: 'hannah_jones', fullname: 'Hannah Jones', birthday: '1995-10-12', gender: 'Female', email: 'hannah.jones@example.com', role: 'Customer' },
    { id: 72, username: 'joseph_clark', fullname: 'Joseph Clark', birthday: '1993-06-28', gender: 'Male', email: 'joseph.clark@example.com', role: 'Admin' },
    { id: 73, username: 'lily_lee', fullname: 'Lily Lee', birthday: '1990-12-08', gender: 'Female', email: 'lily.lee@example.com', role: 'Staff' },
    { id: 74, username: 'jacob_morris', fullname: 'Jacob Morris', birthday: '1989-05-15', gender: 'Male', email: 'jacob.morris@example.com', role: 'Customer' },
    { id: 75, username: 'isabella_white', fullname: 'Isabella White', birthday: '1994-11-24', gender: 'Female', email: 'isabella.white@example.com', role: 'Admin' },
    { id: 76, username: 'ethan_wood', fullname: 'Ethan Wood', birthday: '1991-02-16', gender: 'Male', email: 'ethan.wood@example.com', role: 'Staff' },
    { id: 77, username: 'mila_davis', fullname: 'Mila Davis', birthday: '1995-07-04', gender: 'Female', email: 'mila.davis@example.com', role: 'Customer' },
    { id: 78, username: 'james_smith', fullname: 'James Smith', birthday: '1988-04-12', gender: 'Male', email: 'james.smith@example.com', role: 'Admin' },
    { id: 79, username: 'harper_johnson', fullname: 'Harper Johnson', birthday: '1993-10-19', gender: 'Female', email: 'harper.johnson@example.com', role: 'Staff' },
    { id: 80, username: 'david_lee', fullname: 'David Lee', birthday: '1990-08-22', gender: 'Male', email: 'david.lee@example.com', role: 'Customer' },
    { id: 81, username: 'lila_anderson', fullname: 'Lila Anderson', birthday: '1996-01-13', gender: 'Female', email: 'lila.anderson@example.com', role: 'Admin' },
    { id: 82, username: 'michael_smith', fullname: 'Michael Smith', birthday: '1994-03-10', gender: 'Male', email: 'michael.smith@example.com', role: 'Staff' },
    { id: 83, username: 'emily_martin', fullname: 'Emily Martin', birthday: '1988-07-19', gender: 'Female', email: 'emily.martin@example.com', role: 'Customer' },
    { id: 84, username: 'jack_smith', fullname: 'Jack Smith', birthday: '1992-04-05', gender: 'Male', email: 'jack.smith@example.com', role: 'Admin' },
    { id: 85, username: 'zara_jones', fullname: 'Zara Jones', birthday: '1993-09-22', gender: 'Female', email: 'zara.jones@example.com', role: 'Staff' },
    { id: 86, username: 'owen_clark', fullname: 'Owen Clark', birthday: '1989-10-14', gender: 'Male', email: 'owen.clark@example.com', role: 'Customer' },
    { id: 87, username: 'lucy_walker', fullname: 'Lucy Walker', birthday: '1995-11-03', gender: 'Female', email: 'lucy.walker@example.com', role: 'Admin' },
    { id: 88, username: 'leo_miller', fullname: 'Leo Miller', birthday: '1992-12-21', gender: 'Male', email: 'leo.miller@example.com', role: 'Staff' },
    { id: 89, username: 'maria_smith', fullname: 'Maria Smith', birthday: '1991-01-30', gender: 'Female', email: 'maria.smith@example.com', role: 'Customer' },
    { id: 90, username: 'harry_jones', fullname: 'Harry Jones', birthday: '1988-07-26', gender: 'Male', email: 'harry.jones@example.com', role: 'Admin' },
    { id: 91, username: 'sara_johnson', fullname: 'Sara Johnson', birthday: '1996-05-09', gender: 'Female', email: 'sara.johnson@example.com', role: 'Staff' },
    { id: 92, username: 'jason_davis', fullname: 'Jason Davis', birthday: '1993-09-16', gender: 'Male', email: 'jason.davis@example.com', role: 'Customer' },
    { id: 93, username: 'grace_miller', fullname: 'Grace Miller', birthday: '1990-11-07', gender: 'Female', email: 'grace.miller@example.com', role: 'Admin' },
    { id: 94, username: 'brian_harris', fullname: 'Brian Harris', birthday: '1986-04-18', gender: 'Male', email: 'brian.harris@example.com', role: 'Staff' },
    { id: 95, username: 'margaret_wilson', fullname: 'Margaret Wilson', birthday: '1995-02-07', gender: 'Female', email: 'margaret.wilson@example.com', role: 'Customer' },
    { id: 96, username: 'ethan_james', fullname: 'Ethan James', birthday: '1994-06-15', gender: 'Male', email: 'ethan.james@example.com', role: 'Admin' },
    { id: 97, username: 'emma_smith', fullname: 'Emma Smith', birthday: '1992-12-08', gender: 'Female', email: 'emma.smith@example.com', role: 'Staff' },
    { id: 98, username: 'jacob_johnson', fullname: 'Jacob Johnson', birthday: '1989-09-24', gender: 'Male', email: 'jacob.johnson@example.com', role: 'Customer' },
    { id: 99, username: 'maggie_brown', fullname: 'Maggie Brown', birthday: '1995-07-18', gender: 'Female', email: 'maggie.brown@example.com', role: 'Admin' },
    { id: 100, username: 'owen_white', fullname: 'Owen White', birthday: '1993-05-05', gender: 'Male', email: 'owen.white@example.com', role: 'Staff' },
];


export default users;

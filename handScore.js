//Hand Score
// J K Q = 10p
// ACes = 11p
/*
    Cards
    Suits > **Prefix Heart(H), Club(C), Diamond(D), Spades(S)
    Value > **Suffix A=11 2, 3, 4, 5, 6, 7, 8, 9, 10 , J, Q, K


    Point
    > According to each card 
    > The value of your hand is determine by add is by adding up on of the suit
    > Only one of the suit count as points (so choose the most valuable points)

    Special Points
    > 8-8-8, J-J-J, same rank = 32.5 p
    > except
    > A-A-A = 35

    if

    Algorithm
    1) Input as string => to array => object
    2) input cannot be more than 3 cards => validate input first
    3) User prefix as  Suit H,C,D,S
    4) The most valuable point of same suit count but if all is different Pick the most valuable point
    
*/


function getHandScore(hand) {
    let highestPoint = 0;
    let highestSuit = '';

    const suitPoint = {
        "S": 0,
        "C": 0,
        "H": 0,
        "D": 0
    }
    
    const cardsInHand = {}
    const rankPoint = {}
    const arrayOfCards = hand.toUpperCase().split(" ")
    if (arrayOfCards.length > 3 || arrayOfCards.length < 3) {
        console.log("Invalid input of cards, Cards cannot be less or more than 3");
        throw Error('Invalid input of cards, Cards cannot be less or more than 3')
    }

    //Points for each card from 2-10 and special card such as J Q K and Ace
    for (let card of arrayOfCards) {
        cardsInHand[card] = (cardsInHand[card] || 0) + 1
        rankPoint[card[1]] = (rankPoint[card[1]] || 0) + 1
        const faceCard = card[1];
        if (card.length === 3 || faceCard === 'J' || faceCard === 'Q' || faceCard === 'K' ) {
            suitPoint[card[0]] = suitPoint[card[0]] + 10;
        } else if(faceCard === 'A') {
            suitPoint[card[0]] = suitPoint[card[0]] + 11;
        } else {
            suitPoint[card[0]] = suitPoint[card[0]] + Number(card[1]) ;
        }
        
        
    }
    
    //Giving Points to special winning sets
    for (let card in cardsInHand) {
        //console.log(card[0])
        if (cardsInHand[card] === 3 || rankPoint[card[1]] === 3) {
            if (suitPoint[card[0]] < 33) {
                suitPoint[card[0]] = 32.5;
            } else {
                suitPoint[card[0]] = 35; 
            }
        }
    }

    
    //Compare and find the highest point
    
    for (let suit in suitPoint) {
        if (suitPoint[suit] > highestPoint) {
            highestPoint = suitPoint[suit];
            highestSuit = suit;
        }
    }
    return highestPoint;
    
}
//Output
//const highestScore = getHandScore("S3 D3 H3");
//console.log('The Highest score from the 3 cards hand is ', highestScore);
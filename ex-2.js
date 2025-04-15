// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;
lastMonthPaidMoreThan4000 = 4001;
isWeekday = 1;
hasBoughtProductFromITCategory = 0;
hasAttendedDiscountEvent = 1;
isPlatinum = 0;
let hasPromotion;
hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && !hasBoughtProductFromITCategory && !hasAttendedDiscountEvent) || (isPlatinum);
Boolean (hasPromotion)
hasPromotion = Boolean (hasPromotion)
console.log(hasPromotion);

// myDataJournal.js
// CS81 Module 4B: My Data Explorer
// Repository: https://github.com/shahiamin-lab/cs81-module4b-mydataexplorer
// This program analyzes a week of personal data including sleep, screen time, mood, caffeine, and focus levels.

// --------------------
// Step 1: Weekly Journal Data
// --------------------
const weekData = [
    { day: "Monday", sleepHours: 7, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 7 },
    { day: "Tuesday", sleepHours: 6, screenTime: 7, mood: "tired", caffeineIntake: 3, focusLevel: 5 },
    { day: "Wednesday", sleepHours: 6.5, screenTime: 8, mood: "productive", caffeineIntake: 1, focusLevel: 8 },
    { day: "Thursday", sleepHours: 7, screenTime: 5, mood: "happy", caffeineIntake: 2, focusLevel: 7 },
    { day: "Friday", sleepHours: 8, screenTime: 4, mood: "relaxed", caffeineIntake: 1, focusLevel: 9 },
    { day: "Saturday", sleepHours: 6.5, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 7 },
    { day: "Sunday", sleepHours: 7, screenTime: 5, mood: "relaxed", caffeineIntake: 0, focusLevel: 8 }
];

// --------------------
// Step 2: Predictions (Comments)
// --------------------

// Prediction: Most screen time → Wednesday
// Prediction: Best focus day → Friday
// Prediction: More caffeine → might improve focus? Likely not

// --------------------
// Step 3: Discovery Functions
// --------------------

/**
 * Finds the day with the highest screen time.
 * Input: array of daily objects
 * Output: string name of the day
 */
function findHighestScreenTime(data) {
    let maxTime = 0;
    let maxDay = "";
    for (let entry of data) {
        if (entry.screenTime > maxTime) {
            maxTime = entry.screenTime;
            maxDay = entry.day;
        }
    }
    return maxDay;
}

/**
 * Calculates average sleep hours for the week.
 * Input: array of daily objects
 * Output: number average sleep
 */
function averageSleep(data) {
    let totalSleep = 0;
    for (let entry of data) {
        totalSleep += entry.sleepHours;
    }
    return (totalSleep / data.length).toFixed(1); // 1 decimal
}

/**
 * Finds the most frequent mood.
 * Input: array of daily objects
 * Output: string mood
 */
function mostFrequentMood(data) {
    const counts = {};
    for (let entry of data) {
        if (!counts[entry.mood]) counts[entry.mood] = 1;
        else counts[entry.mood]++;
    }
    let maxMood = "";
    let maxCount = 0;
    for (let mood in counts) {
        if (counts[mood] > maxCount) {
            maxCount = counts[mood];
            maxMood = mood;
        }
    }
    return maxMood;
}

/**
 * Checks if caffeine intake correlates to focus level.
 * Returns a simple "Yes" or "No" based on average focus on high caffeine days.
 */
function correlateCaffeineToFocus(data) {
    let highCaffeineFocus = [];
    let lowCaffeineFocus = [];
    for (let entry of data) {
        if (entry.caffeineIntake >= 2) highCaffeineFocus.push(entry.focusLevel);
        else lowCaffeineFocus.push(entry.focusLevel);
    }
    const avgHigh = highCaffeineFocus.reduce((a,b)=>a+b,0)/highCaffeineFocus.length;
    const avgLow = lowCaffeineFocus.reduce((a,b)=>a+b,0)/lowCaffeineFocus.length;
    return avgHigh > avgLow ? "Yes" : "Nope!";
}

// --------------------
// Step 4: Example Output
// --------------------
console.log("Analyzing Maya's Data Journal...\n");

console.log("Most screen time:", findHighestScreenTime(weekData));
console.log("Average sleep:", averageSleep(weekData), "hrs");
console.log("Most frequent mood:", `"${mostFrequentMood(weekData)}"`);
console.log("Does more caffeine mean better focus? →", correlateCaffeineToFocus(weekData));

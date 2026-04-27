// Define what a Subject looks like
interface Subject {
    name: string;
    marks: number;
}

class StudentResult {
    studentName: string;
    subjects: Subject[];

    constructor(name: string, subjects: Subject[]) {
        this.studentName = name;
        this.subjects = subjects;
    }

    // Function to calculate average
    calculateAverage(): number {
        let total = 0;
        this.subjects.forEach(s => total += s.marks);
        return total / this.subjects.length;
    }

    // Human-like logic for status
    checkStatus(): string {
        const avg = this.calculateAverage();
        if (avg >= 50) {
            return "Pass - Well done!";
        } else {
            return "Fail - Need to study more.";
        }
    }
}

// Example usage (Testing the logic)
const myResults = new StudentResult("Muhira", [
    { name: "Database", marks: 85 },
    { name: "Networking", marks: 78 },
    { name: "Programming", marks: 90 }
]);

console.log(`${myResults.studentName} Average: ${myResults.calculateAverage()}`);
console.log(`Status: ${myResults.checkStatus()}`);

# FBLA Ranking Program
# Siddharth Girkar
# This code keeps track of the relative rankings of schools competing at
# an FBLA conference.

keep_recording, schools_and_scores, num_winners = True, {}, 10

def competition_run(): # Runs through all the positions of one competition.
    print("") # Creates an empty line.
    for i in range(num_winners, 0, -1):
        winning_school = str(input("Enter the #" + str(i) + " position: "))
        if winning_school not in schools_and_scores:
            schools_and_scores[winning_school] = 11-i
        else:
            schools_and_scores[winning_school] += 11-i

def display_top_schools(): # Displays the current top ten schools and their point values.
    best_schools = sorted(schools_and_scores, key=schools_and_scores.__getitem__)[::-1]
    print ("\nHere are the top schools: \n")
    if len(best_schools) < 10: # Displays all the schools, if the number is under 10.
        for i in range(len(best_schools)):
            print(str(i+1) + ".\t" + best_schools[i] + ":\t\t" + str(schools_and_scores[best_schools[i]]))
    else:
        for i in range(10): # Displays the top ten schools.
            print(str(i+1) + ".\t" + best_schools[i] + ":\t\t" + str(schools_and_scores[best_schools[i]]))

print("\nFBLA RANKING PROGRAM: ")
print("DO NOT EXIT TERMINAL UNTIL THE PROCESS IS FINISHED.")

while keep_recording:
    competition_run() # Goes through one run of competitions.
    display_top_schools() # Displays the top schools.
    keep_recording = input("\nEnter a vowel to continue (y doesn't count!): ") in "aeiou" # Ends if there are no more competitions.

display_top_schools() # Displays the final results.

/**
 * Task: The MDN page for Date lists two methods to get the year of a date.
 * 
 * let today = new Date();
 * 
 * today.getYear();
 * today.getFullYear();
 * 
 * What is the difference between the two methods and which one should you use?

 * Solution: `today.getYear()` is a deprecated method according to the MDN docs and should not be used. It does not return full years, but `today.getFullYear()` does.
**/
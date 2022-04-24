# Work-day-scheduler

Workday Scheduler helps to schedule task of each day from 9am to 5pm.An employee can add specific events to this scheduler.Past time is in gray color,current time appears in red and future hour will be in green color.If save particular event,then localstorage will store the data.


![image](https://user-images.githubusercontent.com/101385521/164954788-e839c4c7-4e4d-47d0-8716-634c960295a6.png)



# Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

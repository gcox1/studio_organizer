CREATE TABLE lessons_attendance
(
LessonId Int,
LessonName Text,
DateTime timestamp,
AttendanceTaken boolean,
LessonAttended boolean
);


INSERT INTO lessons_attendance (LessonName, AttendanceTaken, LessonAttended) VALUES ('Joey Lesson', TRUE, TRUE), ('Billy Lesson', TRUE, FALSE), ('Tina Lesson' FALSE, FALSE);

SELECT * FROM lessons_attendance;
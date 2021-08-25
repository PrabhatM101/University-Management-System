-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2021 at 01:31 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `university`
--

-- --------------------------------------------------------

--
-- Table structure for table `city`
--

CREATE TABLE `city` (
  `city_id` int(20) NOT NULL,
  `city_name` varchar(255) NOT NULL,
  `city_state_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `city`
--

INSERT INTO `city` (`city_id`, `city_name`, `city_state_id`) VALUES
(1, 'Delhi', '1'),
(2, 'Bangluru', '2'),
(3, 'Hydrabad', '3'),
(4, 'Mumbai', '2'),
(5, 'Chennai', '1');

-- --------------------------------------------------------

--
-- Table structure for table `country`
--

CREATE TABLE `country` (
  `country_id` int(11) NOT NULL,
  `country_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `country`
--

INSERT INTO `country` (`country_id`, `country_name`) VALUES
(1, 'India'),
(2, 'Pakistan'),
(3, 'China'),
(4, 'Nepal'),
(5, 'Afganistan'),
(6, 'Australia');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL,
  `course_name` varchar(255) NOT NULL,
  `course_total_fees` varchar(255) NOT NULL,
  `sub_id` varchar(255) NOT NULL,
  `eligibility` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_name`, `course_total_fees`, `sub_id`, `eligibility`, `duration`, `description`) VALUES
(1, 'BCA', '30000', '', '', '', ''),
(2, 'MCA', '80000', '', '', '', ''),
(3, 'DCA', '12000', '', '', '', ''),
(4, 'PGDCA', '18000', '', '', '', ''),
(7, 'B-TECH', '80000', '', '10th,12th', '4', 'In this couirse.........................'),
(8, 'BBA', '30000', '', '10th,12th', '3', 'BBA Course');

-- --------------------------------------------------------

--
-- Table structure for table `exam`
--

CREATE TABLE `exam` (
  `exam_id` int(11) NOT NULL,
  `exam_title` varchar(255) NOT NULL,
  `exam_course` varchar(255) NOT NULL,
  `exam_subject` varchar(255) NOT NULL,
  `exam_date` varchar(255) NOT NULL,
  `exam_time` varchar(255) NOT NULL,
  `exam_desc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `exam`
--

INSERT INTO `exam` (`exam_id`, `exam_title`, `exam_course`, `exam_subject`, `exam_date`, `exam_time`, `exam_desc`) VALUES
(12, 'sem', '2', '6', '06/08/2020', 'Evening(02:00-05:00PM)', 'dfg'),
(13, 'sem2', '2', '9', '01/21/2021', 'Evening(02:00-05:00PM)', '22'),
(18, 'sem', '2', '10', '07/21/2021', 'Evening(02:00-05:00PM)', ''),
(20, 'sem', '2', '8', '01/09/2021', 'Evening(02:00-05:00PM)', 'ty'),
(24, 'sem', '4', '16', '01/31/2021', 'Evening(02:00-05:00PM)', ''),
(26, 'Exam returns', '3', '11', '01/06/2021', 'Morning(10:00-01:00PM)', ''),
(27, 'Sem-4', '1', '1', '08/11/2021', 'Morning(10:00-01:00PM)', ''),
(28, 'old syllabus', '2', '3', '08/11/2022', 'Evening(02:00-05:00PM)', ''),
(29, 'mca-2', '2', '7', '08/31/2021', 'Evening(02:00-05:00PM)', '');

-- --------------------------------------------------------

--
-- Table structure for table `fees`
--

CREATE TABLE `fees` (
  `st_id` int(255) NOT NULL,
  `st_course` varchar(255) NOT NULL,
  `st_total_fees` varchar(255) NOT NULL,
  `st_paid` varchar(255) NOT NULL,
  `st_bal` varchar(255) NOT NULL,
  `st_date` varchar(255) NOT NULL,
  `st_desc` varchar(255) NOT NULL DEFAULT 'Fees Paid'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `fees`
--

INSERT INTO `fees` (`st_id`, `st_course`, `st_total_fees`, `st_paid`, `st_bal`, `st_date`, `st_desc`) VALUES
(86, 'BCA', '30000', '15000,5000,10000', '0', '2021-08-25,2021/08/25,2021/08/25', 'First Installment,,'),
(93, 'DCA', '12000', '7000,5000', '0', '2021-08-25,2021/08/25', ''),
(95, 'PGDCA', '18000', '8000', '10000', '2021-08-25', 'First Installment'),
(92, 'MCA', '80000', '8000,72000', '0', '2021-08-25,2021/08/25', '');

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `login` int(11) NOT NULL,
  `login_name` varchar(255) NOT NULL,
  `login_pass` varchar(255) NOT NULL,
  `login_cpass` varchar(255) NOT NULL,
  `login_ques` varchar(255) NOT NULL,
  `login_ans` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `login`
--

INSERT INTO `login` (`login`, `login_name`, `login_pass`, `login_cpass`, `login_ques`, `login_ans`) VALUES
(1, 'admin', '1234', '1234', 'What is your pet name?', 'jack');

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `id` int(11) NOT NULL,
  `m_sid` varchar(50) NOT NULL,
  `course` varchar(50) NOT NULL,
  `subject` varchar(50) NOT NULL,
  `ob_theory` varchar(50) NOT NULL,
  `ob_practical` varchar(57) NOT NULL,
  `ob_assignment` varchar(45) NOT NULL,
  `ob_desc` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `marks`
--

INSERT INTO `marks` (`id`, `m_sid`, `course`, `subject`, `ob_theory`, `ob_practical`, `ob_assignment`, `ob_desc`) VALUES
(37, '92', '2', 'Artificial Intelligence', '54', '', '', ''),
(38, '92', '2', 'File Structures', '33', '', '', ''),
(39, '92', '2', 'Quantitative Techniques', '45', '', '', ''),
(40, '93', '3', 'Ms Word', '70', '20', '10', 'eer'),
(41, '93', '3', 'Multimedia', '90', '', '', 'eer'),
(44, '86', '1', 'C-Language', '63', '12', '9', ''),
(45, '86', '1', 'Java', '55', '11', '5', '');

-- --------------------------------------------------------

--
-- Table structure for table `qualification`
--

CREATE TABLE `qualification` (
  `qual_id` int(11) NOT NULL,
  `qual_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `qualification`
--

INSERT INTO `qualification` (`qual_id`, `qual_name`) VALUES
(1, '10th'),
(2, '12th'),
(3, 'Grad.'),
(4, 'Masters');

-- --------------------------------------------------------

--
-- Table structure for table `security_ques`
--

CREATE TABLE `security_ques` (
  `sec_id` int(11) NOT NULL,
  `sec_ques` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `security_ques`
--

INSERT INTO `security_ques` (`sec_id`, `sec_ques`) VALUES
(1, 'What is your pet name?'),
(2, 'What is your first mobile number?'),
(3, 'What is your favorite actor name?');

-- --------------------------------------------------------

--
-- Table structure for table `state`
--

CREATE TABLE `state` (
  `state_id` int(11) NOT NULL,
  `state_name` varchar(255) NOT NULL,
  `state_country_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `state`
--

INSERT INTO `state` (`state_id`, `state_name`, `state_country_id`) VALUES
(1, 'UP', '1'),
(2, 'MP', '3'),
(3, 'HP', '2'),
(4, 'AP', '2'),
(5, 'Kaushambi', '1');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `st_id` int(11) NOT NULL,
  `st_name` varchar(30) NOT NULL,
  `st_father` varchar(30) NOT NULL,
  `st_phone` varchar(20) NOT NULL,
  `st_email` varchar(30) NOT NULL,
  `st_gen` varchar(10) NOT NULL,
  `st_qual` varchar(40) NOT NULL,
  `st_address1` varchar(50) NOT NULL,
  `st_address2` varchar(50) NOT NULL,
  `st_city` varchar(20) NOT NULL,
  `st_state` varchar(20) NOT NULL,
  `st_country` varchar(20) NOT NULL,
  `st_pincode` varchar(25) NOT NULL,
  `st_dob` varchar(25) NOT NULL,
  `st_doa` varchar(25) NOT NULL,
  `st_course` varchar(20) NOT NULL,
  `st_image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`st_id`, `st_name`, `st_father`, `st_phone`, `st_email`, `st_gen`, `st_qual`, `st_address1`, `st_address2`, `st_city`, `st_state`, `st_country`, `st_pincode`, `st_dob`, `st_doa`, `st_course`, `st_image`) VALUES
(86, 'Amit', 'Amitesh Kumar', '7856546796', 'amit@gmail.com', 'male', '1,2,3', 'Allahabad', 'Prayagraj', '3', '5', '1', '213345', '03/11/1999', '01/07/2018', '1', 'b1629885670.jpeg'),
(92, 'Akhilesh', 'Rahul ', '8328342377', 'akhilesh@gmail.com', 'male', '1,2', 'pune,India\r\n', 'prayagraj', '1', '1', '1', '567675', '01/14/1999', '01/12/2018', '2', 'nature1610942580.webp'),
(93, 'Sam', 'Subhash Kumar', '8686766556', 'sam123@gmail.com', 'male', '1,2,3', 'Agra', 'Bangluru', '2', '1', '1', '656564', '01/11/2021', '07/13/2017', '3', 'circuit1611170504.webp'),
(95, 'Alax', 'Vinay', '8795897589', 'alax_ax@gmail.com', 'male', '1,2,3', 'New Delhi', 'Punjab', '1', '1', '1', '878777', '01/08/2002', '04/14/2021', '4', 'nature1611292707.webp');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `sub_id` int(11) NOT NULL,
  `sub_name` varchar(255) NOT NULL,
  `sub_course_id` int(11) NOT NULL,
  `total_marks` int(11) DEFAULT NULL,
  `total_practical` int(11) DEFAULT NULL,
  `total_theory` int(11) DEFAULT NULL,
  `sub_assignment` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`sub_id`, `sub_name`, `sub_course_id`, `total_marks`, `total_practical`, `total_theory`, `sub_assignment`) VALUES
(1, 'C-Language', 1, 100, 20, 70, 10),
(2, 'Java', 1, 100, 20, 70, 10),
(3, 'Data Structure', 1, 100, 20, 70, 10),
(4, 'Computer Organisation', 1, 100, 20, 70, 10),
(5, 'NA', 1, 100, 20, 70, 10),
(6, 'Operating System', 2, 100, 20, 70, 10),
(7, 'Database Management System', 2, 100, 20, 70, 10),
(8, 'Quantitative Techniques', 2, 100, 0, 100, 0),
(9, 'File Structures', 2, 100, 0, 100, 0),
(10, 'Artificial Intelligence', 2, 100, 0, 100, 0),
(11, 'C++', 3, 100, 20, 70, 10),
(12, 'Networking', 3, 100, 20, 70, 10),
(13, 'Multimedia', 3, 100, 0, 100, 0),
(14, 'Tally ERP 9.0', 3, 100, 20, 70, 10),
(15, 'Ms Word', 3, 100, 20, 70, 10),
(16, 'Oracle', 4, 100, 20, 70, 10),
(17, 'Web Programming', 4, 100, 20, 70, 10),
(18, 'Java', 4, 100, 20, 70, 10),
(19, 'Business Process', 4, 100, 20, 70, 10),
(20, 'Data Structure', 4, 100, 20, 70, 10);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `user_deg` varchar(50) NOT NULL,
  `user_phone` varchar(50) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_gen` varchar(57) NOT NULL,
  `user_qual` varchar(45) NOT NULL,
  `user_exp` varchar(78) NOT NULL,
  `user_interest` varchar(89) NOT NULL,
  `user_auth_name` varchar(45) NOT NULL,
  `user_dob` varchar(25) DEFAULT NULL,
  `user_pass` varchar(50) DEFAULT NULL,
  `user_image` varchar(50) DEFAULT NULL,
  `user_status` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_deg`, `user_phone`, `user_email`, `user_gen`, `user_qual`, `user_exp`, `user_interest`, `user_auth_name`, `user_dob`, `user_pass`, `user_image`, `user_status`) VALUES
(30, 'Aman', 'Vice Chancellor', '7895757587', 'aman@gmail.com', 'male', '10th,12th,BCA,MCA', '2', 'All rounder', 'aman', '01/17/1985', '613Aman01/17/1985', 'user.png', 1),
(31, 'Amit', 'Vice Chancellor', '8546775654', 'amit@gmail.com', 'male', '10th,12th,BCA', '7', 'All rounder', 'amitnew', '10/26/1988', '292Amit10/26/1988', 'circuit1612089817.webp', 1),
(34, 'Ajay', 'Teacher', '7894656345', 'ajay123@gmail.com', 'male', 'BCA,MCA', '8', 'All subjects', 'ajay', '01/09/1992', '227Ajay01/09/1992', 'user.png', 1),
(35, 'Akash', 'Teacher', '9786776676', 'akash@yt', 'male', '10th,12th,BCA', '4', 'Physics', 'akash', '01/21/2021', '348Akash01/21/2021', 'nature1612418171.webp', 1),
(51, 'Dinesh', 'Teacher', '6686767676', 'dinesh@gmail.com', 'male', '10th,12th,BSC,MSC', '2', 'Maths', 'dinesh', '02/19/2021', '332Dinesh02/19/2021', 'user.png', 1),
(52, 'Kamal', 'Teacher', '8989898989', 'kamal@gmail.com', 'male', 'mca', '7', 'Computer Applications', 'kamal', '01/28/1994', '327Kamal01/28/1994', 'nature1613065911.webp', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`city_id`);

--
-- Indexes for table `country`
--
ALTER TABLE `country`
  ADD PRIMARY KEY (`country_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `exam`
--
ALTER TABLE `exam`
  ADD PRIMARY KEY (`exam_id`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`login`);

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `qualification`
--
ALTER TABLE `qualification`
  ADD PRIMARY KEY (`qual_id`);

--
-- Indexes for table `security_ques`
--
ALTER TABLE `security_ques`
  ADD PRIMARY KEY (`sec_id`);

--
-- Indexes for table `state`
--
ALTER TABLE `state`
  ADD PRIMARY KEY (`state_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD PRIMARY KEY (`st_id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`sub_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `city`
--
ALTER TABLE `city`
  MODIFY `city_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `country`
--
ALTER TABLE `country`
  MODIFY `country_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `exam`
--
ALTER TABLE `exam`
  MODIFY `exam_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `marks`
--
ALTER TABLE `marks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `qualification`
--
ALTER TABLE `qualification`
  MODIFY `qual_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `security_ques`
--
ALTER TABLE `security_ques`
  MODIFY `sec_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `state`
--
ALTER TABLE `state`
  MODIFY `state_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `student`
--
ALTER TABLE `student`
  MODIFY `st_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `sub_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

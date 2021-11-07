import React from "react";
import { Link } from "react-router-dom";
import '../../scss/innerpages.scss';
import Sidebar from "./Sidebar";
import EducationIcon from '../../images/education.png';

export default function Education(){
    return(
        <div className="container-fluid">
            <div className="row">
                <Sidebar/>
                <div className="col-md-10 innerpageright">
                    <h1 className="text-center">Education AMH</h1>
           
                    <div className="row">
                        <div class="col-md-10 offset-md-1">
                            <div className="">
                                <div className="row p-5 mt-2 align-items-center">
                                    <div className="col-md-12">
                                        <h4>Low AMH? Kit to prevent premature ovarian failure and help you understand what is AMH </h4>
                                        <p>Eggs cannot be regenerated. Since birth, the eggs in women’s ovary will only metabolize, age, and decrease. At the same time, ovary is also involved in many important physiological functions, including regulation of the hormones, mood, bones, urination, and skin aging. Therefore, it is crucial to understand ovary and eggs. AMH is one key marker to measure ovarian functions. It measures the number of eggs remained in the ovaries,  which is helpful in analyzing many fertility issues, such as the signs for premature ovarian failure, expected age of menopause, physiological fitness for giving birth etc. Once the issues are identified, once can be prepared and even prevent some illness. Eggs cannot be regenerated. Since birth, the eggs in women’s ovary will only metabolize, age, and decrease. At the same time, ovary is also involved in many important physiological functions, including regulation of the hormones, mood, bones, urination, and skin aging. Therefore, it is crucial to understand ovary and eggs. AMH is one key marker to measure ovarian functions. It measures the number of eggs remained in the ovaries,  which is helpful in analyzing many fertility issues, such as the signs for premature ovarian failure, expected age of menopause, physiological fitness for giving birth etc. Once the issues are identified, once can be prepared and even prevent some illness.</p>
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <img src={EducationIcon} alt="" className="img-fluid"/>
                                    </div>
                                    <div className="col-md-12">
                                        <h4>The importance of ovary – Key difference of women</h4>
                                        <p>Ovary is the most important organ for women. Ovaries regulate many key physiological process including hormonal balance, puberty, menstrual cycle, fertility, and menopause. However, why is our understanding of the ovaries so little? Just hormone regulation can impact mood, bone density, and skin aging, which is why women after menopause often experience osteoporosis, muscle deterioration, skin aging.</p>
                                    </div>
                                    <div className="col-md-12">
                                        <h4>The number of eggs – How many eggs do I have left? </h4>
                                        <p>Sex and health education did not teach women that ovarian will only grow old and eggs cannot be regenerated. </p>
                                        <p>Two million eggs will decrease to 0.3 million by the time a woman reach her puberty </p>
                                        <p>The wrong concept is that every month, a woman loses one egg in her menstrual cycle. However, every month, a woman’s body would metabolize nearly 1000 eggs!</p>
                                        <p>At this rate, 0.3 million eggs may not last for 25 years </p>
                                        <p>There are two exceptions to this but neither is good: </p>
                                        <p>5-10% of women will have a lot more than one million eggs at birth, a condition called polycystic ovary. Nevertheless, more eggs do not necessarily mean good as nearly 80% of infertility due to anovulation is caused by polycystic ovary</p>
                                        <p>1% of women are just the opposite. They have much fewer than one million eggs at birth, a condition called premature ovarian failure. These women tend to experience menopause by 40 years old. </p>
                                        <p>Before the advance of biochemical analysis, women would only know they are at menopause once their menstrual cycle stops, which makes it impossible to prepare and prevent infertility illness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
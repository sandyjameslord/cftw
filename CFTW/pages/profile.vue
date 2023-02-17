<template>
    <main id="body">
        <div id="profileInformationContainer" class="informationContainer">         
            <span class='informationMember informationMember1' id='userName'>Name: {{ $auth.$state.user.firstName + " " + $auth.$state.user.lastName }}</span>
            <span class='informationMember informationMember2' id='userEmail'>Email / Login: {{ $auth.$state.user.email }}</span>
            <span class='informationMember informationMember3' id='userEmail'>Nickname: {{ $auth.$state.user.nickName }}</span>
        </div>
        <div id="drewLessonCompletionContainer">
            <div class="drewLessonCompletionContainerTitleContainer">
                <div id="nicknamesCurriculum" class="drewLessonCompletionTitle">{{ $auth.$state.user.nickName }}'s Curriculum</div>
                <!-- <div id="drewLessonCompletionSubTitle">Revisit often for mastery!</div> -->
            </div>
            <br>
            <div id="begLevelsContainer" class="levelsContainer">
                <div id="begTitle" class="localTitle">Beginner</div>
                <div id="begLevelAContainer" class="levelContainer"  @click="openCurriculum(`1`)">
                    <div id="begLevelATitleContainer" class="levelTitleContainer">
                        <div id="begLevelATitle" class="levelTitle">Introduction</div>
                        <div id="begLevelASubTitle" class="levelSubTitle">Level A SubTitle</div>
                    </div>
                    <div id="begLevelAStatusDisplayBox" class="levelDisplayStatusBox">

                        <div id="circleUnitContainer1" class="circleUnitContainer">
                            <div id="percentCross1" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleBegIntroHTML1" class="progress-ring__circle leftcircle progCircleBegIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleBegIntroCSS1" class="progress-ring__circle middlecircle progCircleBegIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleBegIntroJS1" class="progress-ring__circle rightcircle progCircleBegIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>
                        </div>

                        <div id="statusBoxContainer1" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="begLevelAHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelAHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="begLevelACSSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelACSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div> 

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="begLevelAJSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelAJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                             
                        </div>

                    </div>
                </div>

                <div id="begLevelBContainer" class="levelContainer" @click="openCurriculum(`2`)">
                    <div id="begLevelBTitleContainer" class="levelTitleContainer">
                        <div id="begLevelBTitle" class="levelTitle">Practice</div>
                        <div id="begLevelBSubTitle" class="levelSubTitle">Level B SubTitle</div>
                    </div>
                    <div id="begLevelBStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer2" class="circleUnitContainer">
                            <div id="percentCross2" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleBegIntroHTML2" class="progress-ring__circle leftcircle progCircleBegIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleBegIntroCSS2" class="progress-ring__circle middlecircle progCircleBegIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleBegIntroJS2" class="progress-ring__circle rightcircle progCircleBegIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer2" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="begLevelBHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelBHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="begLevelBCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelBCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="begLevelBJSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelBJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>  
                        </div>
                    </div>
                </div>

                <div id="begLevelCContainer" class="levelContainer" @click="openCurriculum(`3`)">
                    <div id="begLevelCTitleContainer" class="levelTitleContainer">
                        <div id="begLevelCTitle" class="levelTitle">Proficiency</div>
                        <div id="begLevelCSubTitle" class="levelSubTitle">Level C SubTitle</div>
                    </div>
                    <div id="begLevelCStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer3" class="circleUnitContainer">
                            <div id="percentCross3" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleBegIntroHTML3" class="progress-ring__circle leftcircle progCircleBegIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleBegIntroCSS3" class="progress-ring__circle middlecircle progCircleBegIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleBegIntroJS3" class="progress-ring__circle rightcircle progCircleBegIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>


                        <div id="statusBoxContainer3" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="begLevelCHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelCHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="begLevelCCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelCCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="begLevelCJSNumberCompleted" class="numberCompleted"></div>
                                <div id="begLevelCJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <br>
            <div id="intLevelsContainer" class="levelsContainer">
                <div id="intTitle" class="localTitle">Intermediate</div>
                <div id="intLevelAContainer" class="levelContainer" @click="openCurriculum(`4`)">
                    <div id="intLevelATitleContainer" class="levelTitleContainer">
                        <div id="intLevelATitle" class="levelTitle">Introduction</div>
                        <div id="intLevelASubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="intLevelAStatusDisplayBox" class="levelDisplayStatusBox">
                        
                        <div id="circleUnitContainer4" class="circleUnitContainer">
                            <div id="percentCross4" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleIntIntroHTML4" class="progress-ring__circle leftcircle progCircleIntIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleIntIntroCSS4" class="progress-ring__circle middlecircle progCircleIntIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleIntIntroJS4" class="progress-ring__circle rightcircle progCircleIntIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer4" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="intLevelAHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelAHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="intLevelACSSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelACSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="intLevelAJSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelAJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div> 
                        </div> 
                    </div>
                </div>

                <div id="intLevelBContainer" class="levelContainer" @click="openCurriculum(`5`)">
                    <div id="intLevelBTitleContainer" class="levelTitleContainer">
                        <div id="intLevelBTitle" class="levelTitle">Practice</div>
                        <div id="intLevelBSubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="intLevelBStatusDisplayBox" class="levelDisplayStatusBox" >
                        <div id="circleUnitContainer5" class="circleUnitContainer">
                            <div id="percentCross5" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleIntIntroHTML5" class="progress-ring__circle leftcircle progCircleIntIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleIntIntroCSS5" class="progress-ring__circle middlecircle progCircleIntIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleIntIntroJS5" class="progress-ring__circle rightcircle progCircleIntIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer5" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="intLevelBHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelBHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="intLevelBCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelBCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="intLevelBJSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelBJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div> 
                        </div> 
                    </div>
                </div>

                <div id="intLevelCContainer" class="levelContainer" @click="openCurriculum(`6`)">
                    <div id="intLevelCTitleContainer" class="levelTitleContainer">
                        <div id="intLevelCTitle" class="levelTitle">Proficiency</div>
                        <div id="intLevelCSubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="intLevelCStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer6" class="circleUnitContainer">
                            <div id="percentCross6" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleIntIntroHTML6" class="progress-ring__circle leftcircle progCircleIntIntroJS" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleIntIntroCSS6" class="progress-ring__circle middlecircle progCircleIntIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleIntIntroJS6" class="progress-ring__circle rightcircle progCircleIntIntroHTML" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer6" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="intLevelCHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelCHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="intLevelCCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelCCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="intLevelCJSNumberCompleted" class="numberCompleted"></div>
                                <div id="intLevelCJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
            <br>
            <div id="advLevelsContainer" class="levelsContainer">
                <div id="advTitle" class="localTitle">Advanced</div>
                <div id="advLevelAContainer" class="levelContainer" @click="openCurriculum(`7`)">
                    <div id="advLevelATitleContainer" class="levelTitleContainer">
                        <div id="advLevelATitle" class="levelTitle">Introduction</div>
                        <div id="advLevelASubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="advLevelAStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer7" class="circleUnitContainer">
                            <div id="percentCross7" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleAdvIntroHTML7" class="progress-ring__circle leftcircle progCircleAdvIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleAdvIntroCSS7" class="progress-ring__circle middlecircle progCircleAdvIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleAdvIntroJS7" class="progress-ring__circle rightcircle progCircleAdvIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer7" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="advLevelAHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelAHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="advLevelACSSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelACSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="advLevelAJSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelAJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div id="advLevelBContainer" class="levelContainer" @click="openCurriculum(`8`)">
                    <div id="advLevelBTitleContainer" class="levelTitleContainer">
                        <div id="advLevelBTitle" class="levelTitle">Practice</div>
                        <div id="advLevelBSubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="advLevelBStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer8" class="circleUnitContainer">
                            <div id="percentCross8" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleAdvIntroHTML8" class="progress-ring__circle leftcircle progCircleAdvIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleAdvIntroCSS8" class="progress-ring__circle middlecircle progCircleAdvIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleAdvIntroJS8" class="progress-ring__circle rightcircle progCircleAdvIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer8" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="advLevelBHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelBHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="advLevelBCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelBCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="advLevelBJSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelBJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>  
                    </div>
                </div>

                <div id="advLevelCContainer" class="levelContainer" @click="openCurriculum(`9`)">
                    <div id="advLevelCTitleContainer" class="levelTitleContainer">
                        <div id="advLevelCTitle" class="levelTitle">Proficiency</div>
                        <div id="advLevelCSubTitle" class="levelSubTitle"></div>
                    </div>
                    <div id="advLevelCStatusDisplayBox" class="levelDisplayStatusBox">
                        <div id="circleUnitContainer9" class="circleUnitContainer">
                            <div id="percentCross9" class="percentCross">
                                <div id="" class="crossLine horizontalCrossLine"></div>
                                <div id="" class="crossLine verticalCrossLine"></div>
                            </div>
                            <svg class="progress-ring leftmost" height="120" width="120">
                                <circle id="progCircleAdvIntroHTML9" class="progress-ring__circle leftcircle progCircleAdvIntroHTML" stroke-width="4" fill="transparent" r="58" cx="60" cy="60" stroke="#b01c1c"/>
                            </svg>
                            <svg class="progress-ring middlemost" height="120" width="120">
                                <circle id="progCircleAdvIntroCSS9" class="progress-ring__circle middlecircle progCircleAdvIntroCSS" stroke-width="4" fill="transparent" r="48" cx="50" cy="50" stroke="#b08b1c"/>
                            </svg>
                            <svg class="progress-ring rightmost" height="120" width="120">
                                <circle id="progCircleAdvIntroJS9" class="progress-ring__circle rightcircle progCircleAdvIntroJS" stroke-width="4" fill="transparent" r="38" cx="40" cy="40" stroke="#1c8bb0"/>
                            </svg>        
                        </div>
                        <div id="statusBoxContainer9" class="statusBoxContainer">
                            <div class="statusBox statusBoxHTML">
                                <div class="statusTitle">HTML</div>
                                <div id="advLevelCHTMLNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelCHTMLTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxCSS">
                                <div class="statusTitle">CSS</div>
                                <div id="advLevelCCSSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelCCSSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>

                            <div class="statusBox statusBoxJS">
                                <div class="statusTitle">JS</div>
                                <div id="advLevelCJSNumberCompleted" class="numberCompleted"></div>
                                <div id="advLevelCJSTotalNumberOfLessons" class="totalNumberOfLessons">14</div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div id="drewsSaves">
            <div class="drewLessonCompletionContainerTitleContainer">
                <div id="nicknamesSavedCode" class="drewLessonCompletionTitle">{{ $auth.$state.user.nickName }}'s Saved Code</div>
            </div>
            <div id="drewSavesContainer">
            </div>
        </div>
    </main>
</template>

<script>
export default {
    components: {

    },
    middleware: "auth",
    data() {
        return {
            currentMatches: [],
            circleElements: [
                "progCircleBegIntroHTML1", "progCircleBegIntroCSS1", "progCircleBegIntroJS1",
                "progCircleBegIntroHTML2", "progCircleBegIntroCSS2", "progCircleBegIntroJS2",
                "progCircleBegIntroHTML3", "progCircleBegIntroCSS3", "progCircleBegIntroJS3",

                "progCircleIntIntroHTML4", "progCircleIntIntroCSS4", "progCircleIntIntroJS4",
                "progCircleIntIntroHTML5", "progCircleIntIntroCSS5", "progCircleIntIntroJS5",
                "progCircleIntIntroHTML6", "progCircleIntIntroCSS6", "progCircleIntIntroJS6",

                "progCircleAdvIntroHTML7", "progCircleAdvIntroCSS7", "progCircleAdvIntroJS7",
                "progCircleAdvIntroHTML8", "progCircleAdvIntroCSS8", "progCircleAdvIntroJS8",
                "progCircleAdvIntroHTML9", "progCircleAdvIntroCSS9", "progCircleAdvIntroJS9",
            ],
            circleValues: [],
            circleColors: ["#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0","#b01c1c", "#b08b1c", "#1c8bb0",],
            circleNewColors: ["red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue","red", "orange", "blue",],
            completionStatuses: {
                "none": "Click to Begin",
                "few": "Good start",
                "some": "On your way",
                "midPoint": "Half way",
                "many": "Almost there",
                "allButOne": "Just one more",
                "all": "Lesson completed"
            }
        }
    },
    async asyncData({ $axios }) {
      try {
        let drewSaveContentsResponse = await $axios.$get("/api/drewSaveContents");
        let drewSaveLessonStatusesResponse = await $axios.$get("/api/drewSaveLessonStatuses");
        let webDevLessonsResponse = await $axios.$get("/api/webDevLessons");

        return {
          drewSaveContents: drewSaveContentsResponse.drewSaveContents,
          drewSaveLessonStatuses: drewSaveLessonStatusesResponse.drewSaveLessonStatuses,
          webDevLessons: webDevLessonsResponse.webDevLessons
        }
      } catch (err) {
        console.log(err.message)
      }
    },
    methods: {
        initializeAllProgressCircles() {
            for (let i = 0; i < this.circleElements.length; i++) {
                this.initializeProgressCircle(i)
            }
        },
        initializeProgressCircle(circleIndex) {
            let circleElement = document.getElementById(this.circleElements[circleIndex])    

            circleElement.stroke = this.circleColors[circleIndex]

            let elementRadius = circleElement.id + "Radius"
            let elementCircumference = circleElement.id + "Circumference"
            let elementCircle = circleElement.id + "Circle"
            
            this.$data[elementRadius] = undefined 
            this.$data[elementCircumference] = undefined 
            this.$data[elementCircle] = undefined 
            
            this.$data[elementCircle] = circleElement
            this.$data[elementRadius] = this.$data[elementCircle].r.baseVal.value;
            this.$data[elementCircumference] = this.$data[elementRadius] * 2 * Math.PI;

            this.$data[elementCircle].style.strokeDasharray = `${this.$data[elementCircumference]} ${this.$data[elementCircumference]}`;
            this.$data[elementCircle].style.strokeDashoffset = this.$data[elementCircumference];
            
            let localCircumference = this.$data[elementCircumference]
            let localCircle = this.$data[elementCircle]
            function setProgress(percent) {
                const offset = localCircumference - percent / 100 * localCircumference;
                localCircle.style.strokeDashoffset = offset;
            }
            setProgress(1);
            let percent = (this.circleValues[circleIndex] / 14) * 100
            setTimeout(() => {setProgress(percent)}, 600)
        },
        openCurriculum(currentLevel) {
            if (currentLevel == 1) {
                this.$router.push("/viewLevel?l=bA");
            }
            else if (currentLevel == 2) {
                this.$router.push("/viewLevel?l=bB");
            }
            else if (currentLevel == 3) {
                this.$router.push("/viewLevel?l=bC");
            }
            else if (currentLevel == 4) {
                this.$router.push("/viewLevel?l=iA");
            }
            else if (currentLevel == 5) {
                this.$router.push("/viewLevel?l=iB");
            }
            else if (currentLevel == 6) {
                this.$router.push("/viewLevel?l=iC");
            }
            else if (currentLevel == 7) {
                this.$router.push("/viewLevel?l=aA");
            }
            else if (currentLevel == 8) {
                this.$router.push("/viewLevel?l=aB");
            }
            else if (currentLevel == 9) {
                this.$router.push("/viewLevel?l=aC");
            }
            
        },
        displayCompletionStatus() {
            let currentUserID = this.$auth.user._id
            let subTitles = document.getElementsByClassName("levelSubTitle")
            let numberOfLessonsCompletedDivs = document.getElementsByClassName("numberCompleted")
            
            let allFinished = Array.apply(null, Array(27)).map(Number.prototype.valueOf,0);
            let statuses = ["b", "i", "a"]
            let levels = ["A", "B", "C"]
            let types = ["HTML", "CSS", "JS"]
            // bAJS01
            for (let i = 0; i < this.drewSaveLessonStatuses.length; i++) {
                let drewSaveLessonStatus = this.drewSaveLessonStatuses[i]
                let userWhoFinishedID = drewSaveLessonStatus.userWhoFinishedID
                if (userWhoFinishedID == currentUserID) {

                    for (let j = 0; j < this.webDevLessons.length; j++) {
                        let webDevLesson = this.webDevLessons[j]
                        if (webDevLesson._id == drewSaveLessonStatus.lessonID) {
                            let lessonLevel = webDevLesson.lessonLevel
                            if      (lessonLevel.startsWith(statuses[0] + levels[0] + types[0])) {allFinished[0]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[0] + types[1])) {allFinished[1]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[0] + types[2])) {allFinished[2]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[1] + types[0])) {allFinished[3]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[1] + types[1])) {allFinished[4]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[1] + types[2])) {allFinished[5]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[2] + types[0])) {allFinished[6]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[2] + types[1])) {allFinished[7]++}
                            else if (lessonLevel.startsWith(statuses[0] + levels[2] + types[2])) {allFinished[8]++}
                
                            else if (lessonLevel.startsWith(statuses[1] + levels[0] + types[0])) {allFinished[9]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[0] + types[1])) {allFinished[10]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[0] + types[2])) {allFinished[11]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[1] + types[0])) {allFinished[12]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[1] + types[1])) {allFinished[13]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[1] + types[2])) {allFinished[14]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[2] + types[0])) {allFinished[15]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[2] + types[1])) {allFinished[16]++}
                            else if (lessonLevel.startsWith(statuses[1] + levels[2] + types[2])) {allFinished[17]++}
                
                            else if (lessonLevel.startsWith(statuses[2] + levels[0] + types[0])) {allFinished[18]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[0] + types[1])) {allFinished[19]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[0] + types[2])) {allFinished[20]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[1] + types[0])) {allFinished[21]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[1] + types[1])) {allFinished[22]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[1] + types[2])) {allFinished[23]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[2] + types[0])) {allFinished[24]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[2] + types[1])) {allFinished[25]++}
                            else if (lessonLevel.startsWith(statuses[2] + levels[2] + types[2])) {allFinished[26]++}
                        }
                    }
                }
            }
            let completedCounters = []

            let localCounter = 0
            let localLesson = 0
            let localTotal = 0

            for (let i = 0; i < numberOfLessonsCompletedDivs.length; i++) {
                let completedLsn = numberOfLessonsCompletedDivs[i]
                let completedTtl = allFinished[i]

                if (this.$auth.user.nickName == "Sandy") {
                    let randomNumber = Math.floor(Math.random() * (14 - 0 + 1) + 0)
                    completedLsn.innerText = randomNumber
                    
                    localTotal += randomNumber
                    localCounter++
                    
                    this.circleValues.push(randomNumber)

                    if (localCounter == 3) {
                        
                        completedCounters[localLesson] = localTotal
                        localCounter = 0
                        localTotal = 0
                        localLesson++
                    }
                } else {
                    completedLsn.innerText = completedTtl
                    
                    localTotal += completedTtl
                    localCounter++
                    
                    this.circleValues.push(completedTtl)

                    if (localCounter == 3) {
                        completedCounters[localLesson] = localTotal
                        localCounter = 0
                        localTotal = 0
                        localLesson++
                    }
                }
            }
            let displays = document.getElementsByClassName("levelContainer")
            let totalNumberOfLessons = 42
            for (let i = 0; i < completedCounters.length; i++) {
                let subTitle = subTitles[i]
                let number = completedCounters[i]
                let display = displays[i]
                if (number < 1) {
                    subTitle.innerText = this.completionStatuses["none"]
                    display.style.opacity = "0.4"
                }
                else if (number < 8) {
                    subTitle.innerText = this.completionStatuses["few"] + ` (${number}/${totalNumberOfLessons})`
                }
                else if (number < 18) {
                    subTitle.innerText = this.completionStatuses["some"] + ` (${number}/${totalNumberOfLessons})`
                }
                else if (number < 24) {
                    subTitle.innerText = this.completionStatuses["midPoint"] + ` (${number}/${totalNumberOfLessons})`
                }
                else if (number < 41) {
                    subTitle.innerText = this.completionStatuses["many"] + ` (${number}/${totalNumberOfLessons})`
                }
                else if (number == 41) {
                    subTitle.innerText = this.completionStatuses["allButOne"] + ` (${number}/${totalNumberOfLessons})`
                }
                else if (number == 42) {
                    subTitle.innerText = this.completionStatuses["all"] + ` (${number}/${totalNumberOfLessons})`
                }

            }
        },
        initializeProgressCircleDisplays() {
            let circles = document.getElementsByClassName("progress-ring__circle")
            let statusBoxes = document.getElementsByClassName("statusBox")
            for (let i = 0; i < circles.length; i++) {
                let circle = circles[i]
                let statusBox = statusBoxes[i]
                let oldColor = this.circleColors[i]
                let newColor = this.circleNewColors[i]
                circle.style.display = "none"
                setTimeout(() => {
                    circle.style.display = "initial"
                }, 600)

                statusBox.addEventListener("mouseenter", () => {
                    circle.style.stroke = newColor
                    circle.style.strokeWidth = "5"
                    statusBox.style.backgroundColor = newColor
                })

                statusBox.addEventListener("mouseleave", () => {
                    circle.style.stroke = oldColor
                    circle.style.strokeWidth = "4"
                    statusBox.style.backgroundColor = oldColor
                })
            }
            setTimeout(() => {
                this.initializeAllProgressCircles()
            }, 600)
        },
        initializeDrewSaves() {
            let userID = this.$auth.user._id
            let drewSaves = []

            let container = document.getElementById("drewSavesContainer")

            for (let i = 0; i < this.drewSaveContents.length; i++) {
                let drewSaveContent = this.drewSaveContents[i]
                if (drewSaveContent.creator == userID) {
                    drewSaves.push(drewSaveContent)
                }
            }
            for (let i = 0; i < drewSaves.length; i++) {
                let lessonID = drewSaves[i]._id
                let lessonName = drewSaves[i].nameOfLesson
                let lessonKeywords = drewSaves[i].keyWords               
                
                let buttonDiv = document.createElement("div")
                let nameOfLessonDiv = document.createElement("div")
                let keyWordsContainerDiv = document.createElement("div")

                let splitKeywords = lessonKeywords.split(", ")
                for (let i = 0; i < splitKeywords.length; i++) {
                    let keyword = splitKeywords[i]

                    let keywordDiv = document.createElement("div")
                    keywordDiv.innerText = keyword
                    keywordDiv.style.padding = "4px"
                    keywordDiv.style.backgroundColor = "white"
                    keywordDiv.style.border = "2px solid black"
                    keywordDiv.style.borderRadius = "4px"
                    keyWordsContainerDiv.append(keywordDiv)
                }

                buttonDiv.style.minHeight = "12.5%"
                buttonDiv.style.width = "95%"
                buttonDiv.style.borderRadius = "4px"
                buttonDiv.style.backgroundColor = "white"
                buttonDiv.style.marginTop = "10px"
                buttonDiv.style.marginBottom = "10px"
                buttonDiv.style.marginTop = "10px"
                buttonDiv.style.marginLeft = "2.5%"
                buttonDiv.style.display = "flex"
                buttonDiv.style.justifyContent = "space-evenly"
                buttonDiv.style.alignItems = "center"
                buttonDiv.style.cursor = "pointer"

                buttonDiv.addEventListener("click", () => {
                    this.$router.push(`/practice?l=${lessonID}`);
                })

                keyWordsContainerDiv.style.display = "flex"
                keyWordsContainerDiv.style.justifyContent = "flex-start"
                keyWordsContainerDiv.style.gap = "20px"
                keyWordsContainerDiv.style.width = "90%"
                
                let red = "#b01c1c"
                let orange = "#b08b1c"
                let blue = "#1c8bb0"
                keyWordsContainerDiv.style.transition = "background-image 1375ms"

                keyWordsContainerDiv.style.backgroundImage = 
                                `linear-gradient(90deg, 
                                ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, 
                                ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, 
                                ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}
                                )`
                buttonDiv.addEventListener("mouseenter", () => {
                    red = "red"
                    orange = "orange"
                    blue = "blue"
                    keyWordsContainerDiv.style.backgroundImage = 
                                `linear-gradient(90deg, 
                                ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, 
                                ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, 
                                ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}
                                )`
                    nameOfLessonDiv.style.backgroundColor = "turquoise"
                    nameOfLessonDiv.style.color = "black"
                    
                })
                buttonDiv.addEventListener("mouseleave", () => {
                    red = "#b01c1c"
                    orange = "#b08b1c"
                    blue = "#1c8bb0"
                    keyWordsContainerDiv.style.backgroundImage = 
                                `linear-gradient(90deg, 
                                ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, ${red}, 
                                ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, ${orange}, 
                                ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}, ${blue}
                                )`
                    nameOfLessonDiv.style.backgroundColor = "#158479"
                    nameOfLessonDiv.style.color = "white"
                })
                
                keyWordsContainerDiv.style.fontSize = "22px"
                keyWordsContainerDiv.style.padding = "4px"

                nameOfLessonDiv.style.borderTopRightRadius = "15%"
                nameOfLessonDiv.style.borderBottomRightRadius = "15%"
                nameOfLessonDiv.innerText = lessonName
                nameOfLessonDiv.style.backgroundColor = "#158479"
                nameOfLessonDiv.style.fontSize = "18px"
                nameOfLessonDiv.style.minWidth = "140px"
                nameOfLessonDiv.style.maxWidth = "140px"
                nameOfLessonDiv.style.color = "white"
                
                nameOfLessonDiv.style.minHeight = "72%"
                nameOfLessonDiv.style.textAlign = "center"
                nameOfLessonDiv.style.lineHeight = "36px"

                buttonDiv.append(nameOfLessonDiv)
                buttonDiv.append(keyWordsContainerDiv)
                container.append(buttonDiv)
            }
        }
    },
    updated() {
        sessionStorage.setItem("currentTitle", "Profile")
    },
    beforeMount() {
        sessionStorage.setItem("currentTitle", "Profile")
    },
    beforeUpdate() {
        sessionStorage.setItem("currentTitle", "Profile")
    },
    mounted() {
        this.displayCompletionStatus()
        setTimeout(() => {
            this.initializeProgressCircleDisplays()
        }, 100)
        this.initializeDrewSaves()
    }
}
</script>

<style scoped>
#drewSavesContainer {
    width: 88.5%;
    height: 400px;
    /* display: flex;
    flex-direction: column;
    justify-content: space-evenly; */
    background-color: #e6e6e6;
    overflow-x:hidden;
    overflow-x:auto;
    margin-left: 5%;
    border: 2px solid darkslategray;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    /* margin-top: 16px; */
    padding-top: 146px;
    z-index: 100000000;
}
#drewsSaves {
    width: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: space-evenly; */
    background-color: gray;
    z-index: 100000000;
}


.statusBoxJS {
    background-color: #1c8bb0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
.statusBoxCSS {
    background-color: #b08b1c;
}

.statusBoxHTML {
    background-color: #b01c1c;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
.statusBoxContainer {
    display: flex;
    flex-direction: row;
    width: 95%;
}
.verticalCrossLine {
    height: 150px;
    width: 2px;
    background-color: rgba(0,0,0,0.2);
    transform: translate(64px, -12px);
    font-size: 10px;
    transition: background-color;
}

.verticalCrossLine::before {
    content: "25%";
    position: relative;
    top: 146px;
    left: -11px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}
.verticalCrossLine::after {
    content: "75%";
    position: relative;
    top: -6px;
    left: -35px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}

.horizontalCrossLine {
    height: 2px;
    width: 150px;
    background-color: rgba(0,0,0,0.2);
    transform: translate(-10px, 64px);
    font-size: 10px;
}
.horizontalCrossLine::before {
    content: "50%";
    position: relative;
    top: -4px;
    left: -18px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
}
.horizontalCrossLine::after {
    content: "100%";
    position: relative;
    top: -4px;
    left: 120px;
    height: 25px;
    width: 25px;
    background-color: white;
    border-radius: 5px;
    padding: 2px;
    text-align: center;
    opacity: 0.9;
    
}
.percentCross {
    position: relative;
    background-color: white;
    height: 130px;
    width: 130px;
    z-index: -1;
    top: 0px;
    border-radius: 65px;
    outline: 2px solid rgba(0,0,0,0.4);
    /* z-index: 90209; */
    z-index: 0;

}
.progress-ring {
    z-index: 90209;
}
.showColor {
    height: 50px;
    width: 50px;
    line-height: 50px;
    text-align: center;
    display: inline;
}

.circleUnitContainer {
    background-color: transparent;
    height: 130px;
    width: 130px;
    /* z-index: -1; */
    
}
svg {
    position:relative;
}
.progress-ring__circle {
    transition: stroke-dashoffset 667ms;
    stroke-dasharray: 10 20;
    stroke-linecap: round;
    stroke-width: 4;
}
.leftmost {
    left: 5px;
    top: -125px;
}
.leftcircle {
    transition-delay: 0ms;
}
.middlemost {
    left: 15px;
    top: -238px;
}
.middlecircle {
    transition-delay: 250ms;
}
.rightmost {
    left: 25px;
    top: -350px;
}
.rightcircle {
    transition-delay: 500ms;
}

/*  */
.drewLessonCompletionTitle {
    font-size: min(6vw, 50px);
    line-height: 100px;
    text-align: center;
}
.statusTitle {
    font-size: 20px;
    background-color: white;
    padding: 2px;
    border-radius: 4px;
    margin-top: 2px;
    margin-bottom: 2px;
}
.localTitle {
    height: 340px;
    background-color:lightslategray;
    color: black;
    -webkit-text-stroke: 1px rgba(75,75,75,1);
    writing-mode: vertical-lr;
    text-orientation: upright;
    text-align: center;
    font-size: 20px;
    margin-top: auto;
    margin-bottom: auto;
    justify-self: flex-start;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
.totalNumberOfLessons {
    font-size: 30px;
    height: 30px;
    width: 80%;
    background-color: white;
    border-top: 5px solid black;
    line-height: 30px;
    text-align: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    
}
.numberCompleted {
    font-size: 30px;
    height: 30px;
    width: 80%;
    background-color: white;
    border-bottom: 5px solid black;
    line-height: 30px;
    text-align: center;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
}
.statusBox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 90%;
    padding-bottom: 4px;
    padding-top: 3px;
    transition: background-color 125ms;
}
.levelDisplayStatusBox {
    height: 300px;
    width: 95%;
    margin-left: 2.5%;
    margin-top: 10px;
    background-color: #189a8d;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    outline: 2px solid black;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;

    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: -1;
    /* cursor: pointer; */
}
.levelSubTitle {
    font-size: 12px;
    line-height: 20px;
    width: 90%;
    height: 20px;
    background-color:white;
}
.levelTitle {
    font-size: 26px;
    line-height: 40px;
    width: 90%;
    height: 40px;
    background-color: white;
}
.levelTitleContainer {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90%;
    margin-left: 5%;
    height: 60px;
    background-color:white;
    text-align: center;
    outline: 2px solid black;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
}
.levelContainer {
    width: 30%;
    height: 380px;
    margin-top: 10px;
    background-color: slategray;
    outline: 2px solid black;
    border-radius: 4px;
    cursor: pointer;
}
.levelsContainer {
    width: 90%;
    margin-left: 5%;
    background-color:rgba(230,230,230,1);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
.drewLessonCompletionContainerTitleContainer {
    width: 90%;
    margin-left: 5%;
    height: 100px;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    z-index: 1000000000;
}
#drewLessonCompletionContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: gray;
}
#sectionBreak {
    width: 100%;
    height: 20px;
    background-color: black;
    margin-top: 20px;
    margin-bottom: 20px;
}
#drewCodeTitle {
    font-size: 24px;
    color: white;
    background-color: black;
}
#interactionContainer {
    display: flex;
}
#search {
    width: 60%;
    text-size-adjust: 25px;
}
</style>
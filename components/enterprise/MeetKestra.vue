<template>
    <div class="container order-2">
        <div class="border-top-block"/>
        <div class="content">
            <h3 class="title">Meet Kestra Enterprise Edition</h3>
            <div class="list-container">
                <div class="list">
                    <p>Security & Compliance</p>
                    <ul class="security-section">
                        <li>
                            <CloudKeyOutline/>
                            <span>SSO</span>
                        </li>
                        <li>
                            <History/>
                            <span>Audit Log & Revision History</span>
                        </li>
                        <li>
                            <FormTextboxPassword/>
                            <span>Secret Manager Integration</span>
                        </li>
                        <li>
                            <KeyWireless/>
                            <span>Service Account & API Tokens</span>
                        </li>
                        <li>
                            <Lastpass/>
                            <span>Encryption</span>
                        </li>
                        <li>
                            <DatabaseRefreshOutline/>
                            <span>SCIM Directory Sync</span>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <p>Governance & Productivity</p>
                    <ul class="security-section">
                        <li>
                            <ServerNetwork/>
                            <span>Multi Tenancy</span>
                        </li>
                        <li>
                            <ChartBarStacked/>
                            <span>Role based Access Control (RBAC)</span>
                        </li>
                        <li>
                            <DotsSquare/>
                            <span>Namespaces Management</span>
                        </li>
                        <li>
                            <Connection/>
                            <span>Workers Isolation, Plugins Control</span>
                        </li>
                        <li>
                            <BallotOutline/>
                            <span>Apps</span>
                        </li>
                        <li>
                            <FormatListGroupPlus/>
                            <span>Custom Blueprints</span>
                        </li>
                    </ul>
                </div>
                <div class="list">
                    <p>Scalability & Infrastructure</p>
                    <ul class="security-section">
                        <li>
                            <WeatherCloudyArrowRight/>
                            <span>Worker Groups, Distant Workers</span>
                        </li>
                        <li>
                            <TimelineCheckOutline/>
                            <span>Task Runners</span>
                        </li>
                        <li>
                            <LightningBoltCircle/>
                            <span>High Availability & Throughput</span>
                        </li>
                        <li>
                            <AlertOctagon/>
                            <span>Fault Tolerant</span>
                        </li>
                        <li>
                            <MonitorDashboard/>
                            <span>Cluster Monitoring & Log Shipper</span>
                        </li>
                        <li>
                            <DatabaseLockOutline/>
                            <span>Dedicated storage & Tenant Isolation</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="information">
                <div class="info-block">
                    <span>Run on Any Cloud or On-Premise</span>
                    <div class="info-images">
                        <img src="../../public/landing/enterprise/AWS-white.svg" alt="aws"/>
                        <img src="../../public/landing/enterprise/Vector.svg" alt="vector"/>
                        <img src="../../public/landing/enterprise/google.svg" alt="google drive"/>
                        <img src="../../public/landing/enterprise/home-roof.svg" alt="home"/>
                    </div>
                </div>
                <div class="info-block">
                    <span>Customer Success Program &  <br>Enterprise Support With SLA</span>
                </div>
            </div>
        </div>
        <div class="plus-icon">
            <img src="../../public/landing/enterprise/plus.svg" alt="plus"/>
        </div>
        <div class="bottom-block">
            <span>Kestra CORE</span>
            <div class="opportunities">
                <div>
                    <CalculatorVariant/>
                    <span>Business Logic In Any Language</span>
                </div>
                <div>
                    <WebBox/>
                    <span>Orchestration Logic  Declarative</span>
                </div>
                <div>
                    <CalendarMultiselect/>
                    <span>Execution Engine & Scheduling</span>
                </div>
                <div>
                    <ChartTree/>
                    <span>Complete Dashboard Everything From the UI</span>
                </div>
            </div>
        </div>
        <div class="compare-btn">
            <NuxtLink href="/pricing" class="button  btn-animated btn-purple-animated">
                <span>Compare all offers</span>
            </NuxtLink>
        </div>
    </div>
</template>
<script setup>
  import CloudKeyOutline from "vue-material-design-icons/CloudKeyOutline.vue";
  import History from "vue-material-design-icons/History.vue";
  import DatabaseRefreshOutline from "vue-material-design-icons/DatabaseRefreshOutline.vue";
  import Lastpass from "vue-material-design-icons/Lastpass.vue";
  import FormTextboxPassword from "vue-material-design-icons/FormTextboxPassword.vue";
  import KeyWireless from "vue-material-design-icons/KeyWireless.vue";
  import ChartBarStacked from "vue-material-design-icons/ChartBarStacked.vue";
  import ServerNetwork from "vue-material-design-icons/ServerNetwork.vue";
  import DotsSquare from "vue-material-design-icons/DotsSquare.vue";
  import Connection from "vue-material-design-icons/Connection.vue";
  import BallotOutline from "vue-material-design-icons/BallotOutline.vue";
  import FormatListGroupPlus from "vue-material-design-icons/FormatListGroupPlus.vue";
  import WeatherCloudyArrowRight from "vue-material-design-icons/WeatherCloudyArrowRight.vue";
  import TimelineCheckOutline from "vue-material-design-icons/TimelineCheckOutline.vue";
  import LightningBoltCircle from "vue-material-design-icons/LightningBoltCircle.vue";
  import AlertOctagon from "vue-material-design-icons/AlertOctagon.vue";
  import MonitorDashboard from "vue-material-design-icons/MonitorDashboard.vue";
  import DatabaseLockOutline from "vue-material-design-icons/DatabaseLockOutline.vue";
  import CalculatorVariant from "vue-material-design-icons/CalculatorVariant.vue";
  import WebBox from "vue-material-design-icons/WebBox.vue";
  import ChartTree from "vue-material-design-icons/ChartTree.vue";
  import CalendarMultiselect from "vue-material-design-icons/CalendarMultiselect.vue";

</script>
<style lang="scss" scoped>
    @import "../../assets/styles/variable";

    .container {
        max-width: 1120px;
        padding: 0;
        border-bottom: none !important;
        .border-top-block {
            width: 100%;
            border: none;
            background-image: linear-gradient(270deg, rgba(16, 16, 45, 0) 26.08%, #343393 74.89%);
            height: 1px;
            display: none;
            @media only screen and (max-width: 575px) {
                display: block;
            }
        }

        .content {
            padding: $rem-2;
            background-color: #121217EB;
            box-sizing: border-box;
            position: relative;
            border-radius: 16px;
            &::before {
                border-radius: 16px;
                content: '';
                background-image: linear-gradient(360deg, rgba(53, 52, 170, 0.78) 5.44%, rgba(37, 32, 49, 0.6) 25.28%, #31314B 68.12%, rgba(53, 52, 170, 0.975664) 109%);
                top: -1px;
                left: -1px;
                bottom: -1px;
                right: -1px;
                position: absolute;
                z-index: -1;

                @media only screen and (max-width: 575px) {
                    background-image: unset;
                }
            }

            .title {
                font-weight: 400;
                font-size: $font-size-3xl;
                text-align: center;
                width: 100%;
                padding-bottom: 32px;

                @media only screen and (max-width: 991px) {
                    font-size: $font-size-2xl;
                    padding-bottom: 16px;
                    margin-bottom: 0;
                }

                @media only screen and (max-width: 575px) {
                    text-align: start;
                    font-size: 22px;
                }
            }

            .list-container {
                display: flex;
                gap: 32px;

                @media only screen and (max-width: 1200px) {
                    width: 100%;
                    gap: 10px;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .list {
                    width: 100%;
                    max-width: 330px;
                    background: linear-gradient(180deg, #21242E 0%, #1A1C24 100%);
                    border: none;
                    border-radius: 20px;
                    padding: $rem-1;
                    box-sizing: border-box;
                    position: relative;

                    &::before {
                        border-radius: 20px;
                        content: '';
                        background-image: linear-gradient(180deg, rgb(101, 110, 125) 0%, rgba(19, 23, 37, 1) 100%) !important;
                        top: -1px;
                        left: -1px;
                        bottom: -1px;
                        right: -1px;
                        position: absolute;
                        z-index: -1;

                        @media only screen and (max-width: 420px) {
                            background-image: unset;
                        }
                    }

                    &:nth-child(3) {
                        @media only screen and (max-width: 1200px) {
                            max-width: unset;
                        }
                    }

                    @media only screen and (max-width: 1200px) {
                        max-width: 49%;
                    }

                    @media only screen and (max-width: 768px) {
                        max-width: unset;
                    }

                    > p {
                        font-size: 18px;
                    }

                    .security-section {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        list-style: none;
                        padding: 0;

                        li {
                            position: relative;
                            box-sizing: border-box;
                            display: flex;
                            gap: 10px;
                            padding: $rem-1;
                            border-radius: 4px;

                            &::after {
                                border-radius: 4px;
                                content: '';
                                background: linear-gradient(90deg, #292D38 0%, rgba(41, 39, 48) 100%);
                                top: 0;
                                left: 0;
                                bottom: 0;
                                right: 0;
                                position: absolute;
                                z-index: 2;
                            }

                            &::before {
                                border-radius: 4px;
                                content: '';
                                background-image: linear-gradient(91.19deg, #474450 1.02%, #4744508c 66.77%);
                                top: -1px;
                                left: -1px;
                                bottom: -1px;
                                right: -1px;
                                position: absolute;
                                z-index: 0;
                            }

                            :deep(.material-design-icon) {
                                .material-design-icon__svg {
                                    font-size: $rem-1;
                                }
                            }

                            span {
                                font-family: $font-family-sans-serif;
                                font-size: 14px;
                                font-weight: 400;
                                line-height: $rem-1;
                                text-align: left;
                                text-underline-position: from-font;
                                text-decoration-skip-ink: none;
                                color: #FFFFFF;
                                position: relative;
                                z-index: 4;
                            }
                        }
                    }
                }
            }

            .information {
                margin-top: $rem-2;
                display: grid;
                text-align: center;
                grid-template-columns: 1fr 1fr;
                gap: $rem-2;


                @media only screen and (max-width: 991px) {
                    grid-template-columns: 1fr;
                }

                .info-block {
                    position: relative;
                    box-sizing: border-box;
                    padding: 16px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                    background: linear-gradient(180deg, #21242E 0%, #1A1C24 100%);
                    align-items: center;

                    &::before {
                        border-radius: 20px;
                        content: '';
                        background-image: linear-gradient(180deg, #2B313E 0%, #131725 100%);

                        top: -1px;
                        left: -1px;
                        bottom: -1px;
                        right: -1px;
                        position: absolute;
                        z-index: -1;
                    }

                    span {
                        height: 100%;
                        align-items: center;
                        font-family: $font-family-sans-serif;
                        font-size: 16px;
                        font-weight: 600;
                        line-height: 18.8px;
                        text-align: center;
                        color: #FFFFFF;
                        text-decoration-skip-ink: none;
                        justify-content: center;
                        display: flex;
                    }

                    .info-images {
                        justify-content: center;
                        display: flex;
                        gap: 9px;
                        align-items: center;
                    }
                }
            }
        }

        .plus-icon {
            display: flex;
            justify-content: center;
        }

        .bottom-block {
            border: 1px solid rgba(65, 74, 93, 1);
            border-style: dashed;
            border-radius: 16px;
            padding: 16px 32px;
            background: linear-gradient(180deg, #21242E 0%, #1A1C24 100%);
            display: flex;
            gap: 30px;
            align-items: center;
            text-align: center;
            justify-content: space-between;

            @media only screen and (max-width: 575px) {
                margin: 0 $rem-2 !important;
                padding-left: $rem-1;
                padding-right: $rem-1;
            }

                @media only screen and (max-width: 991px) {
                flex-direction: column;
                align-items: start;
                gap: $rem-1;
            }

            > span {
                white-space: nowrap;
                font-family: $font-family-sans-serif;
                font-size: 18px;
                font-weight: 600;
                line-height: 21.15px;
                text-align: center;
                color: #FFFFFF;
            }

            .opportunities {
                width: 100%;
                display: flex;
                justify-content: space-between;
                gap: 8px;

                @media only screen and (max-width: 991px) {
                    width: 100%;
                    flex-wrap: wrap;
                }

                div {
                    display: flex;
                    align-items: center;
                    width: 100%;
                    justify-content: space-between;
                    background: #292D38;
                    border: 1px solid #3C3A44;
                    padding: 14px 16px;
                    border-radius: 4px;

                    @media only screen and (max-width: 991px) {
                        justify-content: start;
                        gap: 15px;
                        width: 48%;
                    }

                    @media only screen and (max-width: 768px) {
                        width: 100%;
                    }

                    :deep(.material-design-icon) {
                        .material-design-icon__svg {
                            font-size: 24px;
                        }
                    }

                    span {
                        max-width: 157px;
                        font-family: $font-family-sans-serif;
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        text-align: left;
                        color: #FFFFFF;
                        flex-wrap: wrap;
                        display: flex;
                        @media only screen and (max-width: 1200px) {
                            max-width: 100px;
                        }

                        @media only screen and (max-width: 991px) {
                            max-width: unset;
                        }
                    }
                }
            }
        }

        .compare-btn {
            display: flex;
            justify-content: center;
            margin-top: $rem-2;
            margin-bottom: $rem-4;

            .button {
                max-width: 174px;
                padding: 10px 16px;
                border-radius: 4px;
                cursor: pointer;
                align-items: center;
                background-color: #6862F6;
                color: $white;

                span {
                    font-family: $font-family-sans-serif;
                    font-size: var(--fontsizemd);
                    font-weight: 700;
                    line-height: var(--fontline-heightmd);
                    text-align: center;
                }
            }
        }
    }
</style>

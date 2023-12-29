<template>
    <section class="contact">
        <div class="contact__container contact__container--bg-dark-filter">
            <div class="contact__wrapper">
                <div class="contact__content">
                    <h1 class="contact__title">Contact information</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="form">
        <div class="form__container form__container--bg-light-filter">
            <div class="form__wrapper">
                <div class="form__content">
                    <div class="form__cards">
                        <a class="form__card-link" href="tel:+380934877758">
                            <div class="form__card">
                                <div class="form__card-icon-container">
                                    <img src="@/assets/icons/phone.svg" alt="Icon" class="form__card-icon">
                                </div>
                                <h3 class="form__card-title">Phone number</h3>
                                <p class="form__card-text">+380934877758</p>
                            </div>
                        </a>
                        <a class="form__card-link" href="mailto:artyomshevchenkowarmgray@gmail.com">
                            <div class="form__card">
                                <div class="form__card-icon-container">
                                    <img src="@/assets/icons/email.svg" alt="Icon" class="form__card-icon">
                                </div>
                                <h3 class="form__card-title">E-mail</h3>
                                <p class="form__card-text">artyomshevchenkowarmgray@gmail.com</p>
                            </div>
                        </a>
                    </div>

                    <form class="form__form-body" ref="form" v-on:submit.prevent="handleSend" v-if="!sendData">
                        <h3 class="form__form-title">Send Message</h3>
                        <input v-model="name" type="text" placeholder="First name" name="name" class="form__form-name">
                        <input v-model="surname" type="text" placeholder="Last name" name="surname"
                            class="form__form-surname">
                        <input v-model="phone" type="phone" placeholder="Phone number" name="phone"
                            class="form__form-phone">
                        <input v-model="email" type="mail" placeholder="Address" name="email" class="form__form-email">
                        <textarea v-model="message" name="messsage" placeholder="Message" cols="30" rows="3"
                            class="form__form-message"></textarea>
                        <button type="submit" class="form__form-button" :disabled="disableButton">Send Message</button>
                    </form>

                    <div class="form__form-sucssecs" v-else>
                        <h3 class="form__form-sucssecs-title">The message was successfully delivered</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import emailjs from 'emailjs-com';
const SERVICE_ID = "service_lsz3a55";
const TEMPLATE_ID = "template_itpzxex";
const USER_ID = "bqsQKTfwvEeaDOIsZ";

export default {
    data() {
        return {
            name: "",
            surname: "",
            phone: "",
            email: "",
            message: "",
            disableButton: false,
            sendData: false,
        }
    },
    methods: {
        handleSend(e) {
            try {
                this.disableButton = !this.disableButton
                emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID, {
                    name: this.name,
                    surname: this.surname,
                    phone: this.phone,
                    email: this.email,
                    message: this.message,
                    testData: this.testData,
                })

                    .then(() => {
                        this.sendData = !this.sendData
                        this.name = ""
                        this.surname = ""
                        this.phone = ""
                        this.email = ""
                        this.message = ""
                    })
            }
            catch (error) {
                console.log({ error })
            }
        }
    },
    watch: {
        disableButton() {
            setTimeout(() => {
                this.sendData = !this.sendData
            }, 5000)
        }
    }
}
</script>

<style scoped>
.contact {}

.contact__container {
    background-image: url("@/assets/images/contact-top-bg.jpg");
    background-size: cover;
    background-position: center;
    position: relative;
    min-height: 614px;
    display: flex;
    align-items: center;
}

.contact__wrapper {}

.contact__content {}

.contact__title {}

.form {}

.form__wrapper {
    /* max-width: 1440px; */
}


.form input,
.form textarea,
.form button {
    width: 100%;
    box-sizing: border-box;
}

.form input,
.form textarea {
    padding: 15px 21px;
    border: 2px solid var(--color-2);
    border-radius: 38px;
    background: var(--color-1);
    color: var(--color-3);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
    resize: none;
}

.form input::placeholder,
.form textarea::placeholder {
    color: var(--color-6);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
}

.form__container {
    background-image: url("@/assets/images/contact-form-bg.jpg");
    background-size: cover;
    background-position: center;
    padding-top: 206px;
    padding-bottom: 290px;
}

.form__content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
}

.form__cards {
    display: flex;
    flex-direction: column;
    gap: 90px;
}


.form__card-link {
    display: block;
    padding: 32px 28px;
    box-shadow: 8px 8px 28px 4px var(--color-5);
    background: var(--color-1);
    border-radius: 65px
}

.form__card {
    text-align: start;
    display: grid;
    grid-template-columns: 90px 1fr;
    gap: 7px 20px;
}

.form__card-icon-container {
    grid-row: span 2;
    border-radius: 42%;
    width: 90px;
    aspect-ratio: 1/1;
    border: 2px solid var(--color-2);
    display: flex;
    align-items: center;
    justify-content: center;
}

.form__card-icon {}

.form__card-title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.5px;
    align-self: end;
}

.form__card-text {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.5px;
}

.form__form-body {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px 38px;
    border-radius: 38px;
    background: var(--color-1);
    box-shadow: 8px 8px 28px 4px var(--color-5);
    padding: 80px 52px;
}

.form__form-title {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.04px;
    grid-column: span 2;
}

.form__form-name {}

.form__form-surname {}

.form__form-phone {}

.form__form-email {}

.form__form-message {
    grid-column: span 2;
    overflow: hidden;
}

.form__form-button {
    color: var(--color-2);
    font-family: var(--font-1);
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.62px;
    border-radius: 40px;
    background: var(--color-1);

    border: 2px solid var(--color-2);
    padding: 24px 70px;
    text-wrap: nowrap;
}

.form__form-button:disabled {
    color: var(--color-5);
    border-color: var(--color-5);
    cursor: auto;
}

.form__form-sucssecs {
    display: flex;
    align-items: center;
}

.form__form-sucssecs-title {
    text-align: center;
}

@media(max-width: 1000px) {

    .contact__title {
        text-align: center;
    }

    .form input,
    .form textarea {
        color: var(--color-2);
        font-family: "Arial";
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.54px;

        padding: 0px 0px;
        border: none;
        border-bottom: 2px solid var(--color-2);
        border-radius: 0;
        resize: none;
    }

    .form textarea {
        height: 30vw;
    }

    .form input::placeholder,
    .form textarea::placeholder {
        color: var(--color-6);
        font-family: var(--font-1);
        font-size: 9px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0.54px;
    }

    .form__content {
        display: flex;
        flex-direction: column;
    }

    .form input,
    .form textarea,
    .form button {
        background-color: transparent;
        position: relative;
    }

    .form__form-body {
        padding: 4px;
        background-color: transparent;
    }
}
</style>
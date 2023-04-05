<template>
    <el-form :model="formData" :rules="rules" ref="formData" :disabled="false" label-position="rigth" label-width="180px"
        class="demo-ruleForm">

        <el-form-item label="Дата консультации" prop="date">
            <el-date-picker type="date" format="dd.MM.yyyy" value-format="dd.MM.yyyy" placeholder="Выберите дату"
                v-model="formData.date" :picker-options="datePickerOptions" style="width: 100%;">
            </el-date-picker>
        </el-form-item>

        <el-form-item label="Время консультации" prop="time">
            <el-time-select v-model="formData.time" style="width: 100%;" :picker-options="availableTime"
                placeholder="Выберите время">
            </el-time-select>
        </el-form-item>

        <el-form-item label="Симптомы" prop="symptom">
            <el-input type="textarea" :rows="5" v-model="formData.symptoms"></el-input>
        </el-form-item>

        <el-form-item>
            <el-button type="primary" v-on:click="submitForm('formData')">Сохранить</el-button>
            <el-button v-on:click="cancelForm()">Отмена</el-button>
        </el-form-item>
    </el-form>
</template>
  
<script>




export default {
    data() {
        return {
            formData: this.consultation ? this.consultation : { id: '', patientId: this.$route.params.id, date: '', time: '', symptoms: '', },
            rules: {
                date: [
                    { required: true, message: 'Пожалуйста, укажите дату', trigger: 'change' },
                ],
                time: [
                    { required: true, message: 'Пожалуйста, укажите время', trigger: 'change' }
                ],
            },
            datePickerOptions: { // отключаемя даты, которые уже прошли 
                disabledDate(time) {
                    return Date.now() - time.getTime() > 86400000;
                },
            },
            availableTime: { // считатаем валидный временной отрезок для timePicker
                    ...this.availableTimeCalc()
  
            },
        };
    },

    props: ['type', 'consultation'],

    methods: {
        availableTimeCalc(){ // подсчет отрезка для timePicker. Выбираем время для записи, которое еще не наступило
            let curDate = new Date;
            let hours = curDate.getHours().toString();
            let minutes = (Math.ceil(curDate.getMinutes() / 5)*5).toString();
            return {
                    start: (hours.length === 1 ? '0' + hours : hours) + ':' + (minutes.length === 1 ? '0' + minutes : minutes) ,
                    step: '00:05',
                    end: '20:00'
            };
        },

        submitForm(formName) { // обработка кнопки сохранить
            this.$refs[formName].validate((valid) => {
                //ниже проверяем, есть ли уже у пациента консультация на такое время и такую дату. 
                //Если есть выводим сообщение и не даём добавить
                if (!this.$store.state.consultation.consultations.some(c => (c.date == this.formData.date && c.time == this.formData.time && c.patientId === this.formData.patientId )) || this.type === 'update') {
                    if (valid) {
                        if (this.type === "create") {
                            this.$store.dispatch('ADD_CONSULTATION', this.formData);
                        } else if (this.type === "update") {
                            this.$store.dispatch('UPDATE_CONSULTATION', this.formData);
                        }
                        this.$router.push('/patient/' + this.formData.patientId)
                    } else {
                        return false;
                    }
                } else {
                    this.$message.error('У пациента уже добавлена консультация на это время');
                }

            });
        },
        cancelForm() { // обработка кнопки "Отмена" - переход на страницу пациента
            this.$router.push('/patient/' + this.$route.params.id)
        }
    }
}
</script>

<style scoped></style>
<template>
  <el-form size="medium" :disabled = "isDisabled" label-position="left" :model="patientData" :rules="rules" ref="patientData"  
    label-width="130px" class="patientForm">
    <div>
      <el-form-item label="Фамилия" prop="surname">
        <el-input v-model="patientData.surname"></el-input>
      </el-form-item>
      <el-form-item label="Имя" prop="name">
        <el-input v-model="patientData.name"></el-input>
      </el-form-item>
      <el-form-item label="Отчество" prop="patronymic">
        <el-input v-model="patientData.patronymic"></el-input>
      </el-form-item>
      <el-form-item label="Дата рождения" prop="dateOfBirth">
        <el-date-picker type="date" placeholder="Введите дату рождения" v-model="patientData.dateOfBirth"
          format="dd.MM.yyyy" value-format="dd.MM.yyyy" style="width: 100%;"></el-date-picker>
      </el-form-item>
      <el-form-item label="Пол" prop="sex" style="width: fit-content;">
        <el-radio-group v-model="patientData.sex">
          <el-radio label="Мужской"></el-radio>
          <el-radio label="Женский"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="СНИЛС" prop="snils">
        <el-input v-model="patientData.snils" ></el-input>
      </el-form-item>
    </div>

    <div>
      <el-form-item label="Вес" prop="weight">
        <el-input v-model="patientData.weight"></el-input>
      </el-form-item>

      <el-form-item label="Рост" prop="height">
        <el-input v-model="patientData.height"></el-input>
      </el-form-item>

      <el-form-item label="Возраст" prop="age">
        <el-input v-model="patientData.age"></el-input>
      </el-form-item>
    </div>



    <el-form-item>
      <el-button class = "submitButton" v-show = "!isDisabled" type="primary" v-on:click="submitForm('patientData')">Сохранить</el-button>
      <el-button v-show = "type === 'create'" v-on:click="resetForm('patientData')">Сброс</el-button>
    </el-form-item>
  </el-form>
</template>

<script>


export default {
  data() {

    var validateSnils = (rule, value, callback) => { // функция для проверки валидности СНИЛСа
        if (value.trim() == '') { //если пустая строка выводим оишбку
          callback(new Error('Введите СНИЛС'));
        }

        let normalValue = value.replaceAll(' ', '').replaceAll('-', '');
        //далее считаем контрольное число по алгоритму
        let checkNumber = normalValue.split('').slice(0,9).reduce( (acc, val, index) => acc += val*(9 - index), 0);

        if (checkNumber === 100) {
          checkNumber = 0;
        } else {
          checkNumber = checkNumber % 101;
        }
        if (checkNumber == normalValue.slice(9)) { // если контрольное число совпадает с последними 2 цифрами снисла, то он верный          
          callback();
        } else {
          callback(new Error('Введите корректный СНИЛС'));
        }
      };

      var isNumber = (rule, value, callback) => { // функция для проверки валидности веса,роста, возраста. можно дополнить
  
        if (isNaN(Number(value))) {  
          callback(new Error('Введите корректное число'));
        } else {
          callback();
        }
      };
      
    return {

      patientData: this.patient ? this.patient : { surname: '', name: '', patronymic: '', dateOfBirth: '', sex: '', snils: '',  weight: '', height: '', age: '' },

      rules: {
        surname: [
          { required: true, message: 'Пожалуйста, укажите фамилию', trigger: 'change' },
        ],
        name: [
          { required: true, message: 'Пожалуйста, укажите имя', trigger: 'change' }
        ],
        dateOfBirth: [
          { required: true, message: 'Пожалуйста, укажите дату рождения', trigger: 'change' }
        ],
        sex: [
          { required: true, message: 'Пожалуйста, укажите пол', trigger: 'change' }
        ],
        snils: [
          { validator: validateSnils, trigger:'blur' },
          {  min: 11, max: 14, message: 'Введите корректный СНИЛС', trigger: 'blur' },
        ],
        weight: [
          { validator: isNumber, trigger: 'change'}
        ],
        height: [
          {  validator: isNumber, trigger: 'change'}
        ],
        age: [
          {validator: isNumber, trigger: 'change'}
        ],
      }
    };
  },

  props: ['type', 'patient', 'isDisabled'],
  methods: {
    
  submitForm(formName) {

      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (this.type === "create") { // тут передаю в пропсах тип - редактирование или добавление. переиспользую компоненту не совсем правильно 
            this.$store.dispatch('SAVE_PATIENT', this.patientData);
            this.$router.push('/patients/');
          } else if (this.type === "update") {
            this.$store.dispatch('UPDATE_PATIENT', this.patientData);
            this.$router.push('/patient/' + this.$route.params.id)
          }
        } else {
          return false;
        }
      });
    },
 
    resetForm(formName) {  // сбрасываем данные
        this.$refs[formName].resetFields();
      }
  }
}
</script>
<style scoped>
@import url("//unpkg.com/element-ui@2.15.13/lib/theme-chalk/index.css");

.patientForm {
  width: 400px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: .2s;
  padding: 25px;
  /* margin: auto; */
}
</style>
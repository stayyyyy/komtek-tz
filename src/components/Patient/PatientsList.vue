<template>
    <el-table
        :data="tableData.filter(data => !search || (data.surname.toLowerCase() + ' ' + data.name.toLowerCase() + ' ' + data.patronymic.toLowerCase()).includes(search.toLowerCase()) || data.snils.includes(search.toLowerCase()))"
        style="width: fit-content" height="calc(100vh - 75px)" class="patientList">
        <template>
            <el-table-column prop="surname" label="Фамилия" width="120" sortable>
            </el-table-column>
            <el-table-column prop="name" label="Имя" width="120" sortable>
            </el-table-column>
            <el-table-column prop="patronymic" label="Отчество" width="120" sortable>
            </el-table-column>
            <el-table-column prop="dateOfBirth" label="Дата рождения" width="150" sortable>
            </el-table-column>
            <el-table-column prop="sex" label="Пол" width="120" sortable>
            </el-table-column>
            <el-table-column prop="snils" label="Снилс" width="120">
            </el-table-column>

            <el-table-column label="" width="220">
                <template slot="header" slot-scope="{}">
                    <el-input v-model="search" size="mini" placeholder="Поиск по ФИО и СНИЛС" />
                </template>
                <template slot-scope="scope">
                    <el-button type="text" @click="$router.push('/patient/' + scope.row.id)" size="small">Детали</el-button>
                    <el-button type="text" @click="$router.push('/patient/edit/' + scope.row.id)"
                        size="small">Редактировать</el-button>
                    <el-button type="text" @click="centerDialogVisible = true"
                        size="small">Удалить</el-button>
                    <el-dialog title="Подтвердите действие" :visible.sync="centerDialogVisible" width="30%" center>
                        <span class="dialogSpan">Вы уверены, что хотите удалить пациента?</span>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">Отмена</el-button>
                            <el-button type="primary" @click="deletePatient(scope.row.id)">Удалить</el-button>
                        </span>
                    </el-dialog>
                </template>
            </el-table-column>
        </template>
    </el-table>
</template>
  
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            search: '',
            centerDialogVisible: false,
        }
    },
    computed: {
        ...mapState({
            tableData: state => state.patient.patients, // получаем из state всех пациентов
        }),

    },
    methods: {
        deletePatient(patientId) { // удаление пациента
            this.centerDialogVisible = false;
            this.$store.dispatch('DELETE_PATIENT', patientId);
        }

    }

}
</script>

<style scoped> 
.patientList {
     margin: auto;
     border: 1px solid #ebebeb;
     border-radius: 3px;
     transition: .2s;
     padding: 10px;
 }
 .dialogSpan{
    text-align: center;
}

</style>
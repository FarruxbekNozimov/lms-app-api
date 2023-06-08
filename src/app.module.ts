import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { StudentsModule } from './students/students.module';
import { StaffsModule } from './staffs/staffs.module';
import { GroupsModule } from './groups/groups.module';
import { SubjectsModule } from './subjects/subjects.module';
import { TestGroupModule } from './test-group/test-group.module';
import { TestResultsModule } from './test-results/test-results.module';
import { GroupStaffModule } from './group-staff/group-staff.module';
import { QuestionsModule } from './questions/questions.module';
import { SubjectStaffModule } from './subject-staff/subject-staff.module';
import { AnswersModule } from './answers/answers.module';
import { CheckedTestModule } from './checked-test/checked-test.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/swagger',
    }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    StudentsModule,
    StaffsModule,
    GroupsModule,
    SubjectsModule,
    TestGroupModule,
    TestResultsModule,
    GroupStaffModule,
    QuestionsModule,
    SubjectStaffModule,
    AnswersModule,
    CheckedTestModule,
    RolesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

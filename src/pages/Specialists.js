import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header/header'
import MainButton from '../components/Main/mainButton'
import MainWrapper from '../components/Main/mainWrapper'

const Specialists = ({ navigation }) => {
  return (
    <MainWrapper>
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} style={styles.main}>
        <View style={styles.profilewrapper}>
          <Image style={styles.icon} source={require('../img/dmitri.png')} />
          <Text style={styles.fio}>Димитраш</Text>
        </View>
        <Text style={{ paddingBottom: 15 }}>
          Я – Евгений Димитраш, дипломированный психолог. Автор и ведущий курсов и тренингов по построению отношений,
          личностного роста, преодолению страхов, манипуляциям и конфликтам. Веду частную практику. Работаю с семейными
          отношениями, кризисами, неврозами, самооценкой, разного рода зависимостями.{'\n\n'}
          Пишу книгу, кандидатскую, жизнь.{'\n\n'}С самого детства меня увлекали вопросы внутренних переживаний: как
          формируются наши мысли и наши чувства, как это влияет на будущее. Это предопределило мою профессию. В 2007
          году я с отличием окончил Приднестровский государственный университет им. Т.Г. Шевченко. Свой профессиональный
          путь начинал как педагог-психолог, поэтому отлично ориентируюсь в вопросах детства, воспитания и семьи. К тому
          же, я курировал школу для детей с отклонениями в развитии. Важный факт в моей биографии: я служил военным
          психологом, имею звание старший лейтенант запаса. Преподавал на кафедре психологии ПГУ им. Т.Г. Шевченко
          (дисциплины: индивидуальное психологическое консультирование и социальная психология).{'\n\n'}
          За 17 лет моей психологической практики география моих клиентов охватила не только Россию, но и другие страны:
          США, Китай, Германия, Израиль, Польша и т.д.{'\n\n'}- Как преодолеть трудности?{'\n\n'}- Как принять
          ответственность за свою судьбу?{'\n\n'}- Как решить проблему?{'\n\n'}- Как себя услышать?{'\n\n'}- Как найти
          собственное Я?{'\n\n'}- Как укрепить свое Я?{'\n\n'}
          Задаете себе эти вопросы? У меня есть на них ответы.{'\n\n'}
          Хотите подарить себе конкретные знания и техники по укреплению и повышению психологической эффективности
          своего Я, противодействовать манипуляциям, адекватно выходить из конфликтов? Ничего лишнего! Только то, что
          реально работает, о чём не напишут в книгах популярные авторы и никогда не расскажут на конвейере
          дорогостоящих мастер-классов. Жду вас в гости. Ошибки, заблуждения, непонимание себя, страхи, должны остаться
          в прошлом навсегда.{'\n\n'}
          Ваш Евгений Димитраш
        </Text>
        <MainButton title='Обратиться к специалисту' onPress={() => navigation.navigate('Home')} />
        <View style={{ height: 7.5 }} />
      </ScrollView>
    </MainWrapper>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 15,
    marginBottom: 35,
    paddingHorizontal: 15,
  },
  profilewrapper: {
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden',
    marginTop: 15,
    marginBottom: 15,
  },
  icon: { width: 60, height: 60, borderRadius: 12, backgroundColor: '#D9D9D9' },
  fio: { fontSize: 20, marginLeft: 16 },
})

export default Specialists

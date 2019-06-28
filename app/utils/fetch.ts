// Created by szatpig at 2019/6/28.
async function fetch() {
    try {
        // 注意这里的await语句，其所在的函数必须有async关键字声明
        let response = await fetch(
           'https://facebook.github.io/react-native/movies.json',
        );
        let responseJson = await response.json();
        return responseJson.movies;
    } catch (error) {
        console.error(error);
    }
}
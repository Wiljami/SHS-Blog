package fi.tuni.shs.Blog.Platform;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.net.URISyntaxException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


@SpringBootApplication
public class BlogPlatformApplication {

	public static void main(String[] args) {
		System.out.println("Maija Visala, Hanna Tuominen, Viljami Pietarila");
		System.out.println("Commands that can be used for REST testing.");
		System.out.println("Necessary user name: admin / passwords: admin needed for testing");
		System.out.println(System.getenv("JDBC_DATABASE_URL"));
		SpringApplication.run(BlogPlatformApplication.class, args);
		if (System.getenv("JDBC_DATABASE_URL") != null) {
			try {
				Connection connection = getConnection();
			} catch (URISyntaxException | SQLException e) {
				e.printStackTrace();
			}
		}
	}


	private static Connection getConnection() throws URISyntaxException, SQLException {
		String dbUrl = System.getenv("JDBC_DATABASE_URL");
		return DriverManager.getConnection(dbUrl);
	}
}

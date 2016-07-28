package com.system.util;

import java.io.BufferedInputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

/**
 * Created by yuan on 7/27/16.
 */
public class Configuration {
    private Configuration(){}

    public static final String imageDirectory;
    public static final String serverPicUrl;


    static {
        Properties properties=new Properties();
        try{
            String filePath=Configuration.class.getClassLoader().getResource("properties.properties").getPath();
            InputStream inputStream=new BufferedInputStream(new FileInputStream(filePath));
            properties.load(inputStream);
            inputStream.close();
        }catch (Exception e){
            e.printStackTrace();
        }
        imageDirectory=properties.getProperty("imageDirectory");
        serverPicUrl=properties.getProperty("serverPicUrl");
    }

}
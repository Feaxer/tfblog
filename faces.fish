#!/usr/bin/fish
set files "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/227294/pexels-photo-227294.jpeg?crop=faces&fit=crop&h=500&w=500&auto=compress&cs=tinysrgb" "https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?crop=faces&fit=crop&h=500&w=500&auto=compress&cs=tinysrgb" "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/573299/pexels-photo-573299.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500" "https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=500&w=500"
set i 0
for file in $files
    set i (math $i+1)
    wget -O "public/static/faces/$i.jpg"  -U "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1)" $file 
end

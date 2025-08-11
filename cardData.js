const cardData = [
    { 
        image: "unnamed (6).jpg", 
        date: "27/2",
        message: "<b>Tin nhắn đầu tiên trên Tinder.</b> Vào lúc đó anh muốn tìm một người để nói chuyện và gửi meme cho nhau. Anh không nghĩ rằng mình sẽ tìm thấy em, một người sẽ thay đổi cuộc sống của anh." 
    },
    { 
        image: "unnamed3.jpg", 
        date: "6/3",
        message: "<b>Buổi tối xem phim đầu tiên trên Discord.</b> Chúng mình đã cùng xem The Gorge. Anh đã hơi thất vọng vì muốn nghe giọng của em. Nhưng anh vẫn khá thích buổi tối đó vì cùng xem phim vs e. " 
    },
    { 
        image: ["Screenshot 2025-04-21 113734.png", "unnamed (26).jpg"], 
        date: "19/3",
        message: "<b>Buổi hẹn đầu tiên.</b> Em làm anh hơi bất ngờ nên anh đã hơi lo lắng về vẻ ngoài của mình. Nhưng khi nhìn thấy em, anh đã quên hết mọi thứ xung quanh. Em thật sự rất xinh đẹp và dễ thương. Anh vẫn giữ lại order của em tối hôm đó để có thể mua cho món em thích và làm em bất ngờ.",
        isSpecial: true
    },
    { 
        image: ["unnamed (8).jpg", "interstellar-poster-up.jpg", "108866de-1bbd-4947-8b24-0bc8f902bb0d.jfif"], 
        date: "22/3",
        message: "<b>Lần nắm tay đầu tiên.</b> Anh đã quyết định nắm lấy cơ hội và nắm tay e trong lúc xem phim. Cảm giác tay em thật ấm áp và mềm mại. Anh lên kế hoạch không tốt nên hơn 11h cả 2 mới đi ăn tại Circle K nhưng em không trách móc gì anh." 
    },
    { 
        image: "unnamed2.jpg", 
        date: "23/3",
        message: "Chúng mình cùng ngồi xem phim <b>Ride Your Wave</b>. Một bộ phim tình cảm có cả buồn và vui khiến anh nghĩ về em và mối quan hệ của chúng mình. " 
    },
    { 
        image: "vn-11134207-7qukw-lhy4tzuozh6pc2.jfif", 
        date: "25/3",
        message: "<b>Món quà đầu tiên.</b> Anh muốn mua tặng em một món quà, một thứ em có thể xả những nỗi buồn mà em chưa thể kể với anh. Và một cuốn sách tô màu chính là món quà hoàn hảo mà anh tìm thấy. " 
    },
    { 
        image: ["unnamed (7).jpg", "unnamed (24).jpg"], 
        date: "27/3",
        message: "<b>Lần đầu tiên anh đi pub</b>. Anh đã hơi lo lắng vì không biết thực đơn có gì. anh thực sự thấy rất vui khi được ngồi cùng em và nói những mẩu chuyện nhỏ nhặt." 
    },
    { 
        image: "1200wx1800h_1661793911854.jpg", 
        date: "29/3",
        message: "Chúng mình đi triển lãm Thái Lan và xem phim ở ngoài trời. Hôm đó khá lạnh và <b>em đã tựa đầu vào vai anh</b> khi xem phim. Thật sự tim anh đã rất dao động lúc đó. Khoảng khắc đó dường như bộ phim ko còn quan trọng nữa mà chỉ có em và anh.",
        isSpecial: true
    },
    { 
        image: ["unnamed (5).jpg", "unnamed (23).jpg"], 
        date: "1/4",
        message: "Anh biết em sắp đi Nha Trang và anh cũng hơi lo lắng, anh đã quyết định mua bó hoa em thích để khi em về<b>, bó hoa có thể thay anh đón chào em về nhà.</b>" 
    },
    { 
        image: "Screenshot 2025-04-21 115114.png",
        date: "3/4", 
        message: "Sáng hôm đó em bay vào Nha Trang, anh muốn được đưa em đi ra sân bay nhưng không được nhưng anh vẫn <b>muốn gặp em trước khi em đi</b> nên anh đã dậy sớm và đến bên em trước khi em đi <b>vì muốn làm em bất ngờ.</b>",
        isSpecial: true
    },
    { 
        image: "unnamed (9).jpg", 
        date: "4/4",
        message: "Anh nghĩ em sẽ mệt nhưng em vẫn đồng ý đi chơi với anh. anh đã rất vui khi được gặp em, anh <b>muốn làm em đỡ mệt</b>. Anh đã rất vui khi được nhìn thấy em cười và vui vẻ. Tối hôm đó cũng là lần đầu tiên anh <b>public mối quan hệ của anh với em.</b> ",
    },
    { 
        image: "6d4ad05d-9cb1-43a6-82ee-ecfbc46761b1.jfif", 
        date: "5/4",
        message: "<b>Lần đầu tiên anh thấy em say</b>. anh cảm nhận được lúc đó <b>em cảm thấy đủ an toàn khi ở bên cạnh anh để thể hiện ra sự hồn nhiên của mình.</b>" 
    },
    { 
        image: ["unnamed (10).jpg", "unnamed (22).jpg"], 
        date: "7/4",
        message: "<b>Lần đầu chúng mình cãi nhau.</b>",
        isSad: true
    },
    { 
        image: "3dc149da-d138-4d4d-87a1-4cdf17afebfe.jfif", 
        date: "9/4",
        message: "Em phải về sớm vì mẹ gọi, nhưng trước khi đi, em đã dạy anh ôm. <b>Cái ôm thật lâu, thật ấm, rồi nụ hôn nhẹ trên trán.</b> Đôi mắt em trong đêm ánh lên. Một nụ hôn vụng dại, nhẹ nhàng và thật sâu. Em nghe tim anh đập, còn anh... chỉ mong thời gian ngừng lại. Anh phát hiện ra anh đã làm rơi khuyên tai của em tối hôm đó (một kỷ niệm đáng nhớ :v)",
        isSpecial: true
    },
    { 
        image: "unnamed.png", 
        date: "10/4",
        message: "Sáng sớm, anh quay lại nơi cũ, tìm chiếc hoa tai em đánh rơi. Và anh tìm thấy – một nửa kỷ niệm đầu tiên của nụ hôn. <b>Mỗi người giữ một chiếc như giữ lại một vật kỷ niệm cho nụ hôn đầu.</b>",
        isSpecial: true
    },
    { 
        image: "unnamed1.jpg", 
        date: "12/4",
        message: "Một vòng hồ Tây với chiếc xe đạp, một ly tào phớ anh mua cho em. Chiều đón em tan học, rủ nhau ra công viên Cầu Giấy. <b>Những buổi chiều đơn giản nhưng đầy yêu thương.</b>" 
    },
    { 
        image: ["c1756aa4-3617-431d-a00d-5d5ee5760a51.gif", "unnamed (21).jpg" ,"ce21e6b8-098e-482c-be76-0ec88a7eb0c0.jfif", "download.png"], 
        date: "13/4",
        message: "Hôm đó, tại quán cafe Ban Công trên phố cổ mà em thích, <b>chúng mình ngồi viết điều mình thích và muốn bỏ vào lọ sao.</b> Cùng nhau đọc, cùng nhau ăn tối, xem phim “Before Sunrise” – <b>em ngủ gật trên vai anh, còn anh chỉ muốn giữ em như thế mãi mãi.</b> Em luôn làm anh cảm thấy bất ngờ bởi sự sáng tạo và ngọt ngào của em.",
        isSpecial: true
    },
    { 
        image: ["Screenshot 2025-04-21 092333.png", "9f3ad046-ffd7-4a3c-8581-d7d1cb63efc4.jfif", ],
        date: "15/4",
        message: "Công viên gần nhà, kimbap, đua xe, đi bộ quanh khu phố sang trọng. <b>Em suýt nữa đã nằm lên đùi anh.</b> Anh và em cùng nhau trả lời 10 câu hỏi để hiểu nhau hơn. Những cái ôm, những nụ hôn... không dài, nhưng thấm mãi." 
    },
    { 
        image: "unnamed (1).jpg", 
        date: "18/4",
        message: "Bữa sáng chuộc lỗi. Tối đó mưa, mình không lên được hồ Gươm. Nhưng lại có một quán cafe mèo, cùng nhau xem phim quả quýt <b>em tựa đầu lên vai anh – thật ấm áp và ngọt ngào, anh có thể ngồi như vậy mãi.</b>" 
    },
    { 
        image: ["320f1301-f6f8-492f-97ce-764580b9b75f.gif", "b4d501cc-d4c3-4d3f-ba1a-b411230034fa.gif"], 
        date: "20/4",
        message: "Em có deadline, nhưng vẫn ráng hoàn thành sớm để gặp anh. Mì vằn thắn, kem Tràng Tiền, và những bước chân bên nhau quanh hồ Gươm. <b>Chỉ cần em còn nắm tay anh, anh sẽ luôn đi cùng em.</b>",
        isSpecial: true
    },
    { 
        image: "unnamed.jpg", 
        date: "23/4",
        message: "<b>Món quà đặc biệt e làm riêng cho anh.</b>",
        isSpecial: true
    },
    { 
        image: "unnamed6.jpg", 
        date: "25/4",
        message: "Một buổi tối tại quán cafe ngẫu nhiên mà chúng mình tìm thấy. Bên ngoài trời mưa to nhưng bên trong thật ấm áp và tràn đầy tiếng cười." 
    },
    { 
        image: ["unnamed (11).jpg", "unnamed (19).jpg", "unnamed (20).jpg", "unnamed (25).jpg"], 
        date: "26/4",
        message: "Cùng em đi mua quà cho em gái em và những nguyên liệu cho tấm thiệp anh đang làm." 
    },
    { 
        image: "unnamed7.jpg", 
        date: "27/4",
        message: "Đi ăn cùng em buổi trưa, tối chúng mình cùng đi dạo ở phố đi bộ, ăn cơm, ngồi nói chuyện trên quán cafe sân thượng. Luật về sớm bắt đầu có hiệu lực :v." 
    },
    { 
        image: "download (1).png", 
        date: "29/4",
        message: "<b>Lần đầu anh làm em khóc.</b>",
        isSad: true
    },
    { 
        image: ["unnamed5.jpg","2d153a9a-8e17-4839-b5bc-6f5fa47f8754.gif", "6109bafd-5e79-498c-b530-d7092aba2760.gif"],
        date: "1/5",
        message: "<b>Buổi gặp nhau sau hôm đó. Một ngày nhiều cảm xúc.</b>" 
    },
    { 
        image: "o4zeRCfW6EzZjMAEh9AgN1hJy2IZ2RcBQAMyUC~tplv-tej9nj120t-origin.jpg", 
        date: "2/5",
        message: "Đơn giản là một buổi chiều tại công viên, hai chiếc bánh ngọt và những câu chuyện nhỏ. Thật nhẹ nhàng và ấm áp." 
    },
    { 
        image: ["unnamed4.jpg", "referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-6.png", "5b9ade8a-cdc0-46fb-9db1-ff4c17482ab4.gif","9eeac91c-9c0f-4e74-a339-6c66d2d4f5f3.gif","a4ed7005-deca-4eac-897b-82a0282cfc4f.jfif", "unnamed (16).jpg"], 
        date: "3/5",
        message: "Một ngày em plan cho anh. Chúng mình đã cùng nhau đi xem phim Thunderbolts, lên phố cổ ăn tối và cafe, rồi cùng đi tour đêm Văn Miếu. Thật lâu rồi mới có cả một ngày được ở bên em." 
    },
    { 
        image: ["unnamed (12).jpg", "2ade70f8-0747-4136-a461-48597570b852.jfif", "4f2f5de5-44f3-4840-940b-cb38b70faff6.jfif", "unnamed (18).jpg", "unnamed (17).jpg", "unnamed (14).jpg"], 
        date: "4/5",
        message: "<b>Our Special day ❤️.</b>",
        isSpecial: true
    },
    { 
        image: ["a69aaead-7a4a-426d-a9af-9a6c44b02c02_sVy6SM6n.gif", "unnamed (13).jpg", "unnamed (15).jpg", "Nhà-Thờ_Easy-Resize.com_.jpg"], 
        date: "6/5",
        message: "Chúng mình lên nhà thờ lớn. Em tặng anh món quà em mất nhiều công sức để làm, nó là một máy coupon. Trong đó chứa những việc chúng mình có thể làm cùng nhau cho đến những ý tưởng cho một ngày thú vị. Anh sẽ luôn trân trọng mọi món quà em tặng anh. Em nằm lên đùi anh tại một góc nhỏ trong quán cafe trong khi kể những câu chuyện và anh luồn tay qua mái tóc của em. Cảm giác thật tuyệt ❤️.",
        isSpecial: true
    },
    { 
        image: ["93d8eaf7-bb36-48bb-b688-f011be49a7ad.jfif"], 
        date: "10/5",
        message: "Một buổi hẹn thật ngắn. Chúng mình chỉ kịp cùng nhau ăn vặt và đi dạo quanh hồ cùng những câu chuyện nhỏ, anh còn chưa kip ôm em thì em đã phải về rồi." 
    },
    { 
        image: ["8f2b865e-1ab5-458b-8f2c-e1562062b468.gif","25ae0c90-09ff-4454-b49b-ef62a625ee6d.jfif", "642d6102-b1ea-4d00-bbdd-4a8de3b98a86.jfif", "1dd8587f-67ff-4db8-a64e-f7ba5bd0f352.jfif"], 
        date: "11/5",
        message: "Đón em sau khi em đi học về, cùng nhau đi ăn tối (lẩu ếch >.<). Chúng mình cùng nhau đi cafe nằm và xem phim. Em đã ngủ một chút trong lòng anh. Ước gì được như vậy mãi ❤️.",
        isSpecial: true 
    },
    { 
        image: ["b66bcd3d-fd6d-43ff-8be7-06b09a17d0e0.gif", "d88028ba-8515-4025-95d7-b4523a183a16.jfif", "6edd4161-7a73-4c95-b1e3-097e00c6535d.jfif", "unnamed (27).jpg"], 
        date: "13/5",
        message: "Chúng mình cùng chơi boardgame tại quán cafe. Thời gian trôi qua thật nhanh, cảm giác thời gian ở bên em thật ngắn ngủi. Chúng mình ôm nhau thật chặt rồi phải đi về :<." 
    },
    { 
        image: "unnamed (28).jpg", 
        date: "15/5",
        message: "Một buổi workdate cùng em, chúng mình đã cùng nhau làm việc và ăn tối tại quán cafe. Em thật đẹp khi ngồi làm việc." 
    },
    { 
        image: ["unnamed (29).jpg", "unnamed (32).jpg" ],
        date: "17/5",
        message: "Buổi date trước khi anh đi Ninh Bình. Hum đó anh cùng em đi xem đồ điện tử tại siêu thị điện máy và em nói \"Không có nhà anh nhà em mà là nhà chúng ta\". Cảm giác chúng mình như một cặp đôi mới cưới đang sắm sửa cho tổ ấm vậy. Xong chúng mình ngồi tại quán cafe viết về các tính cách của em mà anh cảm nhận. Anh đã không kịp nghe bức thư của em vì phải về sớm.",
        isSpecial: true
    },
    { 
        image: ["unnamed (30).jpg", "unnamed (31).jpg"], 
        date: "20/5",
        message: "Em phải làm bài tập cho cuối tuần. Chúng mình cùng ngồi chơi cá ngựa. Anh không nhớ bảo em đọc cho anh nghe bức thư em viết :<. Buổi đầu gặp lại sau khi anh đi chơi, khi ở bên cạnh em, anh dường như quên đi sự mệt mỏi sau chuyến đi. Chúng mình ôm nhau thật lâu và thật chặt. Em bước đến và ôm anh thật chặt, cảm giác thật tuyệt." 
    },
    { 
        image: ["unnamed (33).jpg", "cde2b1e6-4eef-41a9-88d1-5ef27e40067e.mp4.gif", "unnamed (40).jpg","unnamed (35).jpg", "unnamed (34).jpg"], 
        date: "22/5",
        message: "Một buổi date nữa trước khi anh đi chơi, anh đã sử dụng coupon love letter và em đã viết tặng anh một bức thư thật đáng iu như con người em vậy. Chúng mình đã ôm nhau thật chặt thật lâu vì không muốn phải rời xa. Anh luôn ở trong trái tim em khi em còn nhớ về anh. Yêu em.",
        isSpecial: true
    },
    { 
        image: ["unnamed (36).jpg"], 
        date: "27/5",
        message: "Chúng mình đi ăn nầm nướng sau đó ra quán cafe ưa thích. Em kể anh nghe những câu chuyện nhưng trong lúc ôm em, anh đã hơi mơ màng chìm vào giấc ngủ :v nhưng vẫn nghe câu chuyện của em.",
    },
    { 
        image: ["1708761b-0494-4bdf-a5ee-a5e1b3932071.jfif", "1772371d-24b0-4ad6-965d-20e14e027696.gif"], 
        date: "29/5",
        message: "Em vừa bận việc nhà cửa vừa bị ốm, anh thương nhắm. Một ngày mùa thu giữa mùa hè của Hà Nội, chúng mình cùng đi ăn và xem phim lilo and stitch. Anh được ôm em thật lâu.",
    },
    { 
        image: ["ecb7bc5b-9cab-470a-9331-87e3d9ba2e89.jfif", "unnamed (37).jpg", "unnamed (38).jpg","be45bf62-d61d-4210-82d4-a632dd95a63d.jfif", "b0902d7f-11db-41d6-b3b3-f2f1e61c6984.jfif", "a4a31f7e-4076-4475-853f-e647374d4012.jfif"], 
        date: "5/6",
        message: "Gặp lại em sau 1 tuần xa cách. Anh nhớ em nhiều lắm, thiếu em cảm giác cuộc sống vẫn tiếp tục thời gian vẫn chạy nhưng sao với anh cảm giác thật buồn, thật thiếu vắng. Anh đã chuẩn bị một món quà bất ngờ cho em, anh đã định dùng để tặng em vào ngày kỉ niệm 100 ngày quen nhau nhưng anh đã quyết định tặng em luôn vào ngày hôm đó.",
    },
    { 
        image: ["de81f3e6-6b8d-4082-ba7e-59707c380842.jfif", "4d1f7bf9-bd46-4436-a13e-d0e20eca01c9.jfif", "Screenshot 2025-06-08 123015.png", "ccd97aeb-5554-4005-aa4a-19c6098a34a6.jfif", "20250607_163643.gif", "226b23ea-a759-4165-9662-d3c465eacc8d.jfif", "unnamed (39).jpg", "37fd0b2a-f27d-4854-aa52-2ef8d9f5d774.jfif", "63e62cc2-2288-46cb-b53a-526f5c430baa.jfif", "99f5ad73-9eda-4f87-93b5-62bf86ef005d.jfif", "d090aaa1-7905-4c13-8c17-d3a58dad806a.jfif", "6450032a-74f4-4b98-8467-20b2d8e58b41.jfif", "06ff118a-87a9-4626-8015-a664abd6b3ab.gif"], 
        date: "7/6",
        message: "Ngày kỉ niệm 100 ngày quen nhau. Chúng mình đã đi workshop làm gốm, cùng nhau làm một cái bát thật đẹp. Dù có lúc hơi bất đồng nhưng vẫn phối hợp rất ăn ý. Sau đó chúng mình đi ăn ốc rồi ngồi nói chuyện. Thời gian trôi thật nhanh khi chúng mình bên nhau còn nhiều hoạt động trong plan còn chưa làm được. Chúng mình đã ở bên nhau 100 ngày và sẽ còn tiếp tục ở bên nhau ❤️",
        isSpecial: true
    },
    { 
        image: ["899b0fb1-82a9-4a23-b3a4-171f4b52c12a.jfif", "bb4b3272-793e-4a67-8ec3-cea36369bae3.gif", "unnamed (41).jpg"], 
        date: "11/6",
        message: "8h tối, sau cơn mưa như trút nước, một buổi tối mát mẻ hiếm hoi của mùa hè, chúng mình đều đói và quyết định ăn tối tại nhà hàng Thái. Đồ ăn thật ngon. Chúng mình đi hóng gió một lúc trước khi quay về quán cafe Cộng gần nhà, đồ uống hông ngon nhưng chúng mình ngồi cùng nhau. Chúng mình um nhau thiệt lâu, những cái um thiệt chặt, những nụ hun thật mềm ❤️. Anh yêu em.",
    },
    { 
        image: ["bi-kip-luyen-rong-ban-live-action-01.jpg", "a257e0c1-2743-41bb-a418-f4c380864ace.jfif", "82ba59d4-1a6c-48c6-b1de-c99daea5e8bf.jfif"], 
        date: "21/6",
        message: "Một ngày mưa gió, chúng mình quyết định đi bằng taxi thay vì xe máy. Hôm đó chúng mình đi xem phim bí kíp luyện rồng tại vincom metropolis sau đó vào muji ngắm nghía đồ cho căn nhà mới của em. Bữa tối chúng mình ăn Pepper Lunch. Anh phải về sớm vì đi chơi ngày hôm sau tối đó chúng mình hông um nhau được lâu. "
    },
    { 
        image: ["11aa471c-0c55-476b-a512-7a95f9180a3b.jfif", "hanam-57-1731334039121.jpg"], 
        date: "27/6",
        message: "Bức ảnh anh đầu to :v. Hum đó chúng mình đi ăn miến lươn, anh được ăn đĩa miến lươn thạch sanh :v. Sau đó chúng mình trải nghiệm một quán cafe mới Treebee coffe, quán cafe như một khu rừng thu nhỏ với thác nước và một cái hồ nhỏ ở giữa. Em gối đầu lên đùi anh cảm giác thiệt là hạnh phúc."
    },
    { 
        image: ["5f1b3fc4-b277-4b0f-97c7-174ed4331838.jfif"], 
        date: "29/6",
        message: "Ngày em khóc TT-TT.",
        isSad: true
    },
    {
        image: ["c9b7d43b-4f98-4757-8aef-d14441ab85eb.jfif"],
        date: "1/7",
        message: "Một ngày mưa to, anh muốn um em vào lòng sau ngày em bùn, chúng mình đi ăn và anh đã um em thật chặt và thật lâu.",
    },
    {
        image: ["d4c2fc7f-8cc2-4dac-876e-7ad07124db5b.jfif", "e62281ed-8ff4-4dec-a181-aadbe340f574.jfif"],
        date: "5/7",
        message: "Chúng mình thay đổi timeline, đón em về chúng mình đi ăn luôn. Ăn tối tại một quán ăn phong cách Hàn Quốc, chúng mình ăn gà rán và mì tương đen. Trời nóng qué, chúng mình lên hồ Tây vào quán cafe ăn bingsu và nói những câu chuyện trong khi em nằm trên đùi anh.",
    },
    {
        image: ["20250417_233332.jpg"],
        date: "6/7",
        message: "The day i cry.",
        isSad: true
    },
    {
        image: ["0b196f8c-4143-4eda-bb3d-1641d41d680d.gif", "d223f3d7-8cbe-4be5-b37a-dd470b2b00c2.jfif", "e1ac4fb5-d080-4afe-9b76-a698ec89ef6c.jfif", "1488e4b5-93ff-4237-b237-a27ff594a8cf.jfif","8bef75bb-25af-4316-9138-3c9b4ad2b2cf.jfif","6027de3d-fa3b-4fd9-996d-ad08226f0d26.jfif","c01cc2c4-9ec9-43b7-80e2-6f609b5e1a0c.jfif", "f036a2b6-d33b-4d87-8809-c4899f0e286c.jfif"],
        date: "13/7",
        message: "Một ngày anh mong đợi rất lâu, ngày mà chúng mình cùng nhau đi shopping và cùng nấu ăn. Thực đơn bữa tối là mỳ sốt kem nấm cùng với steak và salad. Một bữa tối thiệt ngon và cùng nhiều kỉ niệm trong căn nhà mới của em, sau đó chúng mình chơi đất nặn với ý tưởng là gà và vịt cùng một chiếc bánh xinh xắn mừng em về nhà mới :v. Anh đã ngủ quên trong lúc um em vào lòng. Anh yêu em.",
        isSpecial: true
    },
    {
        image: ["the-gioi-khung-long-tai-sinh-19171-thumb.jpg", "cb3e734e-0920-4230-804f-a32c8932bb189m84xn24.jpg"],
        date: "15/7",
        message: "Chúng mình mua phở xào về ăn và sau đó đi xem phim Thế Giới Khủng Long, bộ phim nhìu sạn :v, cả 2 ngồi bình phẩm bộ phim từ đầu đến cuối."
    },
    {
        image: ["fca6ec71-19f0-4ae5-88c7-2487689ff932.jfif", "b7733726-df86-45c2-bb23-3b164136684c.jfif"],
        date: "18/7",
        message: "Chúng mình đi ăn tối tại một quán Hàn ở Kim Mã, trời nóng thiệt, chúng mình quyết định về nhà em chơi, và um nhau thiệt chặt, thì thầm với em, anh yêu em. "
    },
    {
        image: ["a1d790ce-f54f-4320-8ff5-dd62e66f3a19.jfif", "0e45863e-e69c-483a-b591-f60fa74649fa.jfif", "20250725_220640.jpg"],
        date: "25/7",
        message: "",
    },
    {
        image: ["8b8123f4-08ed-4023-85b0-4588dc988de7.jfif", "20250727_224553.jpg"],
        date: "27/7",
        message: "",
    },
    {
        image: ["91e51585-d46d-4e2c-a7c5-dcea2dc08dfb.jfif","2d80570e-c69d-4324-8cad-e048a0e452e8.jfif", "7af7629d-7ecb-4ebc-bd4b-82c03d336627.jfif"],
        date: "31/7",
        message: "",
    },
    {
        image: ["20250417_233332.jpg"],
        date: "1/8",
        message: "",
        isSad: true
    },
    {
        image: ["95c7a59b-d681-49f2-ae24-c1427c747abc.jfif","20250807_193702.jpg","df913393-b203-47eb-b498-c98d4fb78b42.jfif", "20250807_193656.jpg", "e9fad274-3f09-4c61-bfb5-9243b7a2c38e.jfif", "images.jfif"],
        date: "7/8",
        message: "",
    },
    {
        image: [],
        date: "10/8",
        message: "",
    },
];
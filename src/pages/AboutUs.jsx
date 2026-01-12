import '../styles/common.css';
function AboutUs() {
    const content = `
    Sơ đồ tổ chức
1. Tổ chức bộ máy và nhân lực
    Bộ máy quản lý của Công Ty được tổ chức theo chế độ trực tuyến.
    HĐQT gồm 05 thành viên
      Trong đó :
        + Chủ tịch : 01
        + Phó Chủ tịch TT : 01
        + Ủy viên : 03
    - Được Đại Hội Đồng Cổ Đông thành lập bầu chọn và là cơ quan giám sát, đề ra các phương hướng, mục tiêu hoạt động của Công ty. 
    - HĐQT chịu trách nhiệmbổ nhiệm một Tổng Giám Đốc để điều hành Công ty. 

    Ban Kiểm Soát gồm 03 thành viên
       Trong đó : 
          + Trưởng Ban : 01 
          + Ủy viên : 02
       - Được Đại Hội Đồng Cổ Đông thành lập bầu chọn và là cơ quan để kiểm soát mọi hoạt động kinh doanh, quản trị và điều hành của Công ty. Ban Kiểm Soát hoạt động độc lập với HĐQT. Chịu trách nhiệm trước Đại hội đồng cổ đông về những sai phạm của Công ty.

2. Tổng Giám đốc là người được HĐQT bổ nhiệm, có trách nhiệm tổ chức và điều hành mọi hoạt động của Công ty và chịu trách nhiệm hoàn toàn trước HĐQT và cổ đông. Quản lý điều hành tác nghiệp tất cả hoạt động sản xuất kinh doanh của Công ty theo điều lệ công ty cổ phần và theo luật định. Sử dụng có hiệu qủa các nguồn lực của Công ty và thi hành các nghị quyết, Quyết định của HĐQT theo nhiệm vụ và quyền hạn được giao.

3. Phó Tổng Giám Đốc là người được Tổng Giám Đốc Công ty đề nghị và được HĐQT thông qua, có trách nhiệm giúp Tổng Giám Đốc điều hành một số lĩnh vực về hoạt động kinh doanh, đầu tư XDCB ...... của công ty theo sự phân công và ủy quyền của Tổng Giám Đốc, chịu trách nhiệm trước Tổng Giám Đốc về nhiệm vụ được Tổng Giám Đốc phân công, ủy quyền.

4. Phó Tổng Giám Đốc (nội chính) là người được Tổng Giám Đốc Công Ty đề nghị và được HĐQT thông qua có trách nhiệm giúp Tổng Giám Đốc điều hành một hoặc một số lĩnh vực về hành chính nhân sự của Công Ty theo sự phân công và ủy quyền của Tổng Giám Đốc, chịu trách nhiệm trước Tổng Giám Đốc về nhiệm vụ được Tổng Giám Đốc phân công và ủy quyền chịu trách nhiệm trước Tổng Giám Đốc về nhiệm vụ được Tổng Giám Đốc phân công, ủy quyền.

5. Kế Toán Trưởng là người được Tổng Giám Đốc Công Ty đề nghị và được HĐQT thông qua có trách nhiệm giúp Tổng Giám Đốc điều hành về hoạt động tài chính Công ty theo sự phân công của Tổng Giám Đốc, chịu trách nhiệm trước Tổng Giám Đốc.

I. Các Phòng Chức Năng
    1. Phòng Kinh Doanh
        Tham mưu cho Ban Tổng Giám Đốc thực hiện, xây dựng kế hoạch kinh doanh, kế hoạch luân chuyển hàng hóa, kế hoạch phát triển nguồn hàng, thị trường, kinh doanh bán buôn. 
        Tổ chức nghiên cứu phối hợp với các phòng chức năng Công ty để xây dựng kế hoạch tổng hợp của Công ty theo định kỳ hàng năm phù hợp với hướng phát triển của Công ty để trình Tổng Giám đốc xét duyệt bao gồm cả kế hoạch và biện pháp thực hiện. 
        Trên cơ sở kế hoạch năm của Công ty đã được phê duyệt, Phòng Kế Hoạch Kinh Doanh tiến hành xây dựng kế hoạch hàng tháng – qúy và giao đến từng đơn vị trực thuộc. Theo dõi và kiểm tra hoạt động kinh doanh hằng ngày để báo cáo Ban Tổng Giám Đốc. 
        Bao gồm có 03 bộ phận : 
                · Bộ phận kế hoạch thống kê, hợp đồng 
                · Bộ phận kinh doanh 
                · Bộ phận quản lý và điều hành mã số đăng ký hàng hóa, kho hàng

    2. Phòng Kế Toán – Tài Chính 
        Tham mưu cho Ban Tổng Giám Đốc về tổ chức và chỉ đạo thực hiện toàn bộ công tác kế toán, hoạch toán kinh tế của Công ty theo pháp lệnh kế toán, qui chế quản lý tài chính và hạch toán kinh doanh đối với doanh nghiệp cổ phần và qui chế tài chính doanh nghiệp. 
        Bao gồm có 03 bộ phận : 
                · Bộ phận kế toán thống kê 
                · Bộ phận kế toán thu chi 
                · Bộ phận quản lý công nợ hàng hóa, hợp đồng

    3. Phòng Tổ Chức Hành Chính 
        Tham mưu cho Ban Tổng Giám Đốc về tổ chức và lao động tiền lương, tổ chức hành chính, mạng lưới, đề xuất bố trí nhân sự, cán bộ, xây dựng đinh mức tiền lương, tiền thưởng liên quan đến chế độ, chính sách của CNVC lao động. 
        Bao gồm có 03 bộ phận : 
                · Bộ phận hành chính 
                · Bộ phận lao động tiền lương 
                · Bộ phận về mạng lưới, kho tàng, tài sản 

    4. Các đơn vị trực thuộc Công ty 
        Là những đơn vị trực tiếp sản xuất kinh doanh, hoạch toán phụ thuộc, hoạt động theo từng chức năng nhiệm vụ được Tổng Giám Đốc Công ty giao. Mỗi đơn vị có một trưởng đơn vị (Giám Đốc Trung tâm - Chi nhánh) chịu trách nhiệm chung và có 01 hoặc 02 phó hỗ trợ giúp việc cho Giám Đốc. 
        Hiện có 10 đơn vị trực tiếp kinh doanh. Trong đó : 
                · Trung tâm kinh doanh VLXD số 1 
                · Trung tâm kinh doanh VLXD và TTNT số 2 
                · Trung tâm kinh doanh VLXD số 4 
                · Trung tâm kinh doanh VLXD số 5 
                · Trung tâm kinh doanh VLXD số 6 
                · Trung tâm kinh doanh VLXD số 7 
                · Trung tâm kinh doanh VLXD số 9 
                · Trung tâm kinh doanh VLXD – TTNT và Nhiên Liệu số 10 
                · Trung tâm kinh doanh VLXD – Nhiên Liệu và Vận Tải 
                · Chi nhánh tại tỉnh Long An 
                · Chi nhánh tại tỉnh Bình Dương
                · Chi nhánh tại tỉnh Tiền Giang

        Là những đơn vị hạch toán phụ thuộc. Trong đó ngoài chức năng, nhiệm vụ là kinh doanh bán buôn, bán lẻ, phát triển mạng lưới, tìm kiếm thị trường mới. Kinh doanh đồng bộ các mặt hàng chủ yếu của Công ty hiên nay như : ximăng các loại, gạch đất nung, hàng TTNT. Trong đó hiện nay có 01 đơn vị có kinh doanh mặt hàng xăng dầu, chất đốt. 
        Năm 2004, do yêu cầu của thị trường, Công ty đã thành lập Chi nhánh Long An, hạch toán phụ thuộc, kinh doanh các mặt hàng ximăng, sắt thép cung ứng cho thị trường tại một số vùng như Đức Hòa, Đức Huệ …. Năm 2006, Công ty thành lập thêm Chi nhánh tại Tỉnh Bình Dương và năm 2007 thành lập thêm Chi nhánh Tiền Giang.

II. Sơ đồ tổ chức :`;
    return (
       <div>
            <h1>Giới thiệu</h1>
            <div className='text-block'>{content}</div>
            <img src='Sơ_đồ.jpeg'></img>
       </div> 
    )

    
}
export default AboutUs;
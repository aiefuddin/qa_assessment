# Section 3 — Performance Testing Approach

Before launching the flash deal feature, I would run several performance test scenarios to make sure the system can handle the expected increase in traffic.

Normal peak traffic is around **500 requests per minute**.
Flash deals = 500 x 10 = **5 000 requests per minute**.

## 1. Test Scenarios

I would design the following tests:

- **Baseline Test**  
  Run at normal peak load = **500 requests per minute** .To determine current performance and identify the intial point.

- **Load Test**  
  Gradually increase from **500 to 5 000 requests per minute** over **1 minute** and maintain that peak load for **5 to 10 minutes** to check for stable performance.

- **Stress Test**  
  Push traffic beyond the expected peak, for example **6 000 to 7 500 requests per minute**, to find the system's breaking point and observe system/server behavior.

- **Spike Test**  
  Simulate thousands of users placing orders almost at the same time at the start of the flash deal to reflect real-world user behavior.

## 2. Metrics and Pass Criteria

During testing, I would monitor key metrics, including response time, requests per second, throughput, error rate, CPU usage, memory use, database performance, and API timeout rates.

As pasing criteria, I would expect the API to remain responsive during peak traffic, have a low error rate, no application crashes, and resource usage to remain within acceptable limits, such as CPU below **80%** for extended periods.

## 3. Performance Testing Tool

I would use **Apache JMeter** because it is open-source, commonly used for API performance testing, supports realistic load profiles, and works well with reporting and monitoring tools.

## 4. Risks Before Release

Before release, I would point out risks like database bottlenecks, overselling inventory due to simulateous requests, API rate limiting, increased timeout rates, and limits on infrastructure scaling.

Identifying these issues early helps ensure the flash deal stays stable and offers a good user experience during heavy traffic.